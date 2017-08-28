// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
export class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason}`);
  }
}

/**
 * @private
 */
export class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason}`);
  }
}

/**
 * @private
 */
export class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason}`);
  }
}

/**
 * @private
 */
export class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
export class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
export class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
export class ZoneIsAbstract extends LuxonError {
  constructor() {
    super('Zone is an abstract class');
  }
}
