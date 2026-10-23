/* eslint-disable */
import { _decode_provideTokens_SpecificInput, _encode_provideTokens_SpecificInput, provideTokens_SpecificInput } from "../IN-SCF-SDF-Classes/provideTokens-SpecificInput.ta.mjs";
// export { provideTokens_SpecificInput, _decode_provideTokens_SpecificInput, _encode_provideTokens_SpecificInput } from "../IN-SCF-SDF-Classes/provideTokens-SpecificInput.ta.mjs";
import { id_mt_provideTokens } from "../IN-object-identifiers/id-mt-provideTokens.va.mjs";
// export { id_mt_provideTokens } from "../IN-object-identifiers/id-mt-provideTokens.va.mjs";
import { type METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";


/**
 * @summary provideTokens
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideTokens METHOD ::= {
 *   SPECIFIC-INPUT
 *     SEQUENCE {numOfRequestedTokens  INTEGER, -- how many tokens are requested (NOfRT)
 *               oidOfAttribute        OBJECT IDENTIFIER
 *   } -- oid of the attribute (tokens)
 *   / *SPECIFIC-OUTPUT     ATTRIBUTE --attribute selected as input (tokens)* /
 *   BEHAVIOUR
 *     "This method performs the following actions on the entry (thisEntry would be a variable with the DN value of this entry) identified by the execute argument:
 * 1) if the attribute sizeOfRestocking does not exist in the entry, define a variable MAXNT with a default value (e.g. 10) else MAXNT takes the value of the attribute sizeOfRestocking
 * 2) verify that NofRT is inferior or egal to MAXNT
 * (return an execute error if NofRT value is superior to MAXNT)
 * 3) read the attribute of the entry which has the selected oid and count the number of values (0 if empty) and put the result in a variable N
 * (return execute error if the attribute does not exist)
 * 4) read the source attribute in the entry
 * (return execute error error if source does not exist)
 * 5) if N is inferior to NOfRT and the DN of source indicates an entry of class or subclass tokenStock:
 * 5a) bind anonymous with the DSA which contains the entry defined by the address field of source
 * 5b) execute the method provideTokens on the entry with MAXNT as value of the specific-input
 * 5c) if none error is returned, modify the tokens attribute by adding the resulted values
 * 6) if N is inferior to NOfRT and the DN of source indicates an entry of class or subclass securityUserInformation
 * 6a) execute the method defined by fillMethodIdentifier field value on the entry defined by the DN with MAXNT as specific input
 * 6b) if none error is returned, modify the tokens attribute by adding the resulted values
 * 7) read the tokens attribute
 * 8) define a variable toBeReturned with NofRT values of tokens attribute and a variable toBeKept with remainder values
 * 9) remove tokens attribute
 * 10) modify tokens attribute by adding the toBeKept values
 * 11) return the toBeReturned values
 * "
 *   ID              id-mt-provideTokens
 * }
 * ```
 * 
 * @constant
 * @type {METHOD<provideTokens_SpecificInput>}
 * @implements {METHOD<provideTokens_SpecificInput>}
 */
export
const provideTokens: METHOD<provideTokens_SpecificInput> = {
    class: "METHOD",
    decoderFor: {
        "&SpecificInput": _decode_provideTokens_SpecificInput,
        "&SpecificOutput": undefined,
    },
    encoderFor: {
        "&SpecificInput": _encode_provideTokens_SpecificInput,
        "&SpecificOutput": undefined,
    },
    "&description": "This method performs the following actions on the entry (thisEntry would be a variable with the DN value of this entry) identified by the execute argument:1) if the attribute sizeOfRestocking does not exist in the entry, define a variable MAXNT with a default value (e.g. 10) else MAXNT takes the value of the attribute sizeOfRestocking2) verify that NofRT is inferior or egal to MAXNT(return an execute error if NofRT value is superior to MAXNT)3) read the attribute of the entry which has the selected oid and count the number of values (0 if empty) and put the result in a variable N(return execute error if the attribute does not exist)4) read the source attribute in the entry(return execute error error if source does not exist)5) if N is inferior to NOfRT and the DN of source indicates an entry of class or subclass tokenStock:5a) bind anonymous with the DSA which contains the entry defined by the address field of source5b) execute the method provideTokens on the entry with MAXNT as value of the specific-input5c) if none error is returned, modify the tokens attribute by adding the resulted values6) if N is inferior to NOfRT and the DN of source indicates an entry of class or subclass securityUserInformation6a) execute the method defined by fillMethodIdentifier field value on the entry defined by the DN with MAXNT as specific input6b) if none error is returned, modify the tokens attribute by adding the resulted values7) read the tokens attribute8) define a variable toBeReturned with NofRT values of tokens attribute and a variable toBeKept with remainder values9) remove tokens attribute10) modify tokens attribute by adding the toBeKept values11) return the toBeReturned values" /* OBJECT_FIELD_SETTING */,
    "&id": id_mt_provideTokens /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&SpecificInput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&SpecificOutput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
