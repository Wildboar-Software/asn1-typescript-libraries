import IPV4_AFI_IDI from "./IPV4_AFI_IDI.js";

type IPv4 = Uint8Array;
type NSAP = Uint8Array;

const MAX_PORT: number = 65535;

// See ITU Recommendation X.213 (2001), Annex A.5.3.
// IDP:
//   AFI (authority and format identifier) = two hexadecimal digits
//   IDI (initial domain identifier) = variable number of decimal digits,
// DSP:

function ipv4ToDSP (
    ipv4: IPv4,
): Uint8Array {
    const dsp = new Uint8Array(6);
    dsp[0] |= Math.floor(ipv4[0] / 100) << 4;
    dsp[0] |= Math.floor(ipv4[0] / 10) % 10;
    dsp[1] |= (ipv4[0] % 10) << 4;
    dsp[1] |= Math.floor(ipv4[1] / 100);
    dsp[2] |= (Math.floor(ipv4[1] / 10) % 10) << 4;
    dsp[2] |= (ipv4[1] % 10);
    dsp[3] |= Math.floor(ipv4[2] / 100) << 4;
    dsp[3] |= Math.floor(ipv4[2] / 10) % 10;
    dsp[4] |= (ipv4[2] % 10) << 4;
    dsp[4] |= Math.floor(ipv4[3] / 100);
    dsp[5] |= (Math.floor(ipv4[3] / 10) % 10) << 4;
    dsp[5] |= (ipv4[3] % 10);
    return dsp;
}

function portToDSP (
    port: number,
): Uint8Array {
    const dsp = new Uint8Array(3);
    dsp[0] |= Math.floor(port / 10000) << 4;
    dsp[0] |= Math.floor(port / 1000) % 10;
    dsp[1] |= (Math.floor(port / 100) % 10) << 4;
    dsp[1] |= Math.floor(port / 10) % 10;
    dsp[2] |= (port % 10) << 4;
    dsp[2] |= 0x0F;
    return dsp;
}

/**
 * @summary Encode an IPv4 address as an OSI NSAP address.
 * @description
 *
 * This function encodes an IPv4 address as an OSI NSAP address per the
 * instructions in ITU Recommendation X.519 (2016), Section 11.3.
 *
 * @param {number} type The service type identifier of the endpoint.
 * @param {Uint8Array} ipv4 The IPv4 address of the endpoint.
 * @param {number} port The TCP/UDP port of the endpoint.
 * @returns An encoded OSI NSAP address.
 */
export
function ipv4ToNSAP (
    type: number,
    ipv4: IPv4,
    port?: number,
): NSAP {
    if (ipv4.length !== 4) {
        throw new Error(`IPv4: ${ipv4.toString()}`);
    }

    return new Uint8Array([
        ...IPV4_AFI_IDI,
        type,
        ...Array.from(ipv4ToDSP(ipv4)),
        ...((port === undefined) ? [] : Array.from(portToDSP(port))),
    ]);
}

/**
 * @summary Decode an IPv4 address, port number, and service type from an OSI NSAP address.
 * @description
 *
 * This function decodes an IPv4 address, service type, and possibly a TCP/UDP
 * port number from an OSI NSAP address by reversing the instructions given by
 * ITU Recommendation X.519 (2016), Section 11.3.
 *
 * @param {Uint8Array} nsap The OSI NSAP address to decode into an IPv4 address,
 *  port, and service type.
 * @returns A tuple (array) containing, in this order: the numeric identifier of
 *  the service type of this endpoint, the IPv4 address, and the TCP/UDP port number.
 */
export
function ipv4FromNSAP (
    nsap: NSAP,
): [ type: number, ipv4: IPv4, port: number | undefined ] {
    if (nsap.length < 12) {
        throw new Error(`NSAP: ${nsap.toString()}`);
    }
    const ipv4 = [
        (
            (((nsap[6] & 0xF0) >> 4) * 100)
            + ((nsap[6] & 0x0F) * 10)
            + ((nsap[7] & 0xF0) >> 4)
        ),
        (
            ((nsap[7] & 0x0F) * 100)
            + (((nsap[8] & 0xF0) >> 4) * 10)
            + (nsap[8] & 0x0F)
        ),
        (
            (((nsap[9] & 0xF0) >> 4) * 100)
            + ((nsap[9] & 0x0F) * 10)
            + ((nsap[10] & 0xF0) >> 4)
        ),
        (
            ((nsap[10] & 0x0F) * 100)
            + (((nsap[11] & 0xF0) >> 4) * 10)
            + (nsap[11] & 0x0F)
        ),
    ];

    if (nsap.length < 15) {
        return [ nsap[5], new Uint8Array(ipv4), undefined ];
    }

    const port = (
        (((nsap[12] & 0xF0) >> 4) * 10000)
        + ((nsap[12] & 0x0F) * 1000)
        + (((nsap[13] & 0xF0) >> 4) * 100)
        + ((nsap[13] & 0x0F) * 10)
        + ((nsap[14] & 0xF0) >> 4)
    );

    return [ nsap[5], new Uint8Array(ipv4), (port > MAX_PORT ? MAX_PORT : port) ];
}
