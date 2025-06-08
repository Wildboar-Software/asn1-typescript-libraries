type NSAP = Uint8Array;

/**
 * @summary Encode a URI as an OSI NSAP address.
 * @description
 *
 * This function encodes a URI as an OSI NSAP address per the instructions given
 * by ITU Recommendation X.519 (2016), Section 11.4.
 *
 * @param {string} uri The URI to encode as an NSAP
 * @param {boolean} itot Whether this URI points to an ITOT service.
 * @returns {Uint8Array} The encoded NSAP address as a `Uint8Array`
 */
export
function uriToNSAP (
    uri: string,
    itot: boolean,
): NSAP {
    return new Uint8Array([
        0xFF, // AFI
        0x00, itot ? 0x00 : 0x01, // IDI
        ...Buffer.from(uri, "utf-8"),
    ]);
}

/**
 * @summary Decode an OSI NSAP address into a URI.
 * @description
 *
 * This function decodes an OSI-networking NSAP address into a Uniform
 * Resource Identifier (URI) by reversing the instructions for encoding given by
 * ITU Recommendation X.519 (2016), Section 11.4.
 *
 * @param {Uint8Array} nsap The NSAP to decode into a URI.
 * @returns {Array} A URI with two elements: the IDI number, and the URI string
 */
export
function uriFromNSAP (
    nsap: NSAP,
): [ idi: number, uri: string ] {
    return [
        (nsap[1] * 256) + nsap[2],
        Buffer.from(nsap.slice(3)).toString("utf-8"),
    ];
}
