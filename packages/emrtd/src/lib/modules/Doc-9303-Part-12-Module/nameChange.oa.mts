/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_icao_mrtd_security_extensions_nameChange } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-nameChange.va.mjs";
// export { id_icao_mrtd_security_extensions_nameChange } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-nameChange.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary nameChange
 * @description
 *
 * `NULL` extension marking a CSCA name change. The value carries no further
 * data. Section 7.1.1.5 does not state whether the extension is critical.
 *
 * A CSCA link certificate whose issuer is the old name and whose subject is
 * the new name conveys both the name change and the key rollover (the
 * signature key is the old key, the certified key is the new key). That
 * certificate must contain this extension. `PathLengthConstraint` stays 0.
 *
 * The extension may also appear on the new self-signed CSCA certificate,
 * where issuer and subject are both the new name. There it only records that
 * a name change happened; it does not link the old name to the new one.
 *
 * A CSCA must not reuse certificate serial numbers, including
 * after a name change.
 *
 * Doc 9303-12, section 7.1.1.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nameChange EXTENSION ::= {
 *     SYNTAX NULL
 *     IDENTIFIED BY id-icao-mrtd-security-extensions-nameChange
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export
const nameChange: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_icao_mrtd_security_extensions_nameChange /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
