/**
 * @summary Instant one second after `instant`.
 * @description
 *
 * X.520 clause 10.2 `DayTime` is second-precision. Walkers that step
 * past an inclusive occurrence end use this so
 * {@link boundariesOfPeriodOccurrence} can select a later `DayTimeBand`
 * (band matching ignores milliseconds).
 *
 * @param {Date} instant Inclusive end of the current occurrence.
 * @returns {Date} `instant` plus one second.
 * @function
 * @author Cursor Grok 4.6
 */
export
function secondAfter (instant: Date): Date {
    return new Date(instant.valueOf() + 1000);
}

export default secondAfter;
