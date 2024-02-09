import { extraFlags, flags } from '~/data/flags';
import { serverType } from '~/data/environment/serverType';
import { operatingSystem } from '~/data/environment/operatingSystem';

interface GenerateResult {
    'script'?: string,
    'flags'?: string[]
}

interface schema {
  operatingSystem: string,
  serverType: string,
  gui: boolean,
  variables: boolean,
  autoRestart: boolean,
  extraFlags: string[],
  fileName: string,
  flags: string,
  withResult: boolean,
  withFlags: boolean,
  memory: number,
}

export function generateResult(parsed: schema): GenerateResult {
  const selectedFlags = flags[parsed.flags];
  let generatedFlags: string[] = selectedFlags.generate(parsed);

  if (parsed.extraFlags) {
    for (const currentFlags of parsed.extraFlags) {
      const selectedFlags = extraFlags[currentFlags];

      generatedFlags = selectedFlags.generate({
        ...parsed,
        'existingFlags': generatedFlags,
      }) ?? generatedFlags;
    }
  }

  const selectedServerType = serverType[parsed.serverType];

  generatedFlags = selectedServerType.generate?.({
    ...parsed,
    'existingFlags': generatedFlags,
  }) ?? generatedFlags;

  const selectedOperatingSystem = operatingSystem[parsed.operatingSystem];
  const result = selectedOperatingSystem.generate({
    ...parsed,
    'existingFlags': generatedFlags,
  }) ?? generatedFlags;

  const data: GenerateResult = {};

  if (parsed.withResult) {
    data.script = result.script;
  }

  if (parsed.withFlags) {
    data.flags = result.flags;
  }

  return data;
}