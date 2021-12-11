import type { OCTET_STRING } from "asn1-ts";
import { ipv4FromNSAP } from "./ipv4";
import IPV4_AFI_IDI from "./IPV4_AFI_IDI";

export
function naddrToURI (naddr: OCTET_STRING): string | undefined {
    switch (naddr[0]) {
    case (0x54): {
        for (let i = 1; i < IPV4_AFI_IDI.length; i++) {
            if (naddr[i] !== IPV4_AFI_IDI[i]) {
                return undefined;
            }
        }
        const [ type, ipv4, port ] = ipv4FromNSAP(naddr);
        switch (type) {
        case (0x11): { // LDAP
            return `ldap://${ipv4}:${port ?? 389}`;
        }
        case (0x10): { // IDM over IPv4
            if (!port) {
                return undefined;
            }
            return `idm://${ipv4}:${port}`;
        }
        case (0x03): { // ITOT
            return `itot://${ipv4}:${port ?? 102}`;
        }
        default: {
            return undefined;
        }
        }
    }
    case (0xFF): {
        if (naddr[1] !== 0x00) {
            return undefined;
        }
        switch (naddr[2]) {
        case (0x00): {
            return Buffer.from(naddr.slice(3)).toString("utf-8");
        }
        case (0x01): {
            return Buffer.from(naddr.slice(3)).toString("utf-8");
        }
        default: {
            return undefined;
        }
        }
    }
    default: {
        return undefined;
    }
    }
}

export default naddrToURI;
