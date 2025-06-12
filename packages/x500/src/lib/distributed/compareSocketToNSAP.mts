import type { Socket } from "net";
import { TLSSocket, checkServerIdentity } from "tls";
import type { OCTET_STRING } from "asn1-ts";
import { lookup } from "dns/promises";
import { ipv4FromNSAP } from "./ipv4.mjs";
import { uriFromNSAP } from "./uri.mjs";
import { URL } from "url";
import IPV4_AFI_IDI from "./IPV4_AFI_IDI.mjs";

/**
 * @deprecated
 */
export
async function compareSocketToNSAP (
    socket: Socket | TLSSocket,
    nsap: OCTET_STRING,
): Promise<boolean> {
    if (nsap[0] === 0xFF) { // It is a URL.
        try {
            const [ idi, uri ] = uriFromNSAP(nsap);
            switch (idi) {
                case (0):
                case (1): {
                    const url = new URL(uri);
                    const hostname = url.hostname;
                    if ("encrypted" in socket) {
                        const cert = socket.getPeerCertificate();
                        const error = checkServerIdentity(hostname, cert);
                        return !error;
                    }
                    const addresses = await lookup(hostname, {
                        all: true,
                    });
                    for (const address of addresses) {
                        if (address.address.toLowerCase() === socket.remoteAddress?.toLowerCase()) {
                            return true;
                        }
                    }
                    return false;
                }
                default: {
                    return false; // Not understood.
                }
            }
        } catch {
            return false;
        }
    }
    // Otherwise, the only other recognized format is the IP address.
    for (let i = 0; i < IPV4_AFI_IDI.length; i++) {
        if (nsap[i] !== IPV4_AFI_IDI[i]) {
            return false;
        }
    }
    const [ , ipv4 ] = ipv4FromNSAP(nsap);
    const ip: string = Array.from(ipv4).join(".");
    return (ip === socket.remoteAddress);
}

export default compareSocketToNSAP;
