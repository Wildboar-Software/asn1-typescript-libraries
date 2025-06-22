/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { id_opcode_ldapTransport } from "../CommonProtocolSpecification/id-opcode-ldapTransport.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.mjs";
import { abandonFailed } from "../DirectoryAbstractService/abandonFailed.oa.mjs";
import {
    LdapArgument,
    _decode_LdapArgument,
    _encode_LdapArgument,
} from "../DirectoryAbstractService/LdapArgument.ta.mjs";
import {
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "@wildboar/ldap/src/lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPMessage.ta.mjs";

/**
 * @summary ldapTransport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapTransport OPERATION ::= {
 *   ARGUMENT    LdapArgument
 *   RESULT      SEQUENCE OF LDAPMessage
 *   ERRORS      { abandonFailed | abandoned }
 *   CODE        id-opcode-ldapTransport }
 * ```
 *
 * @constant
 * @type {OPERATION<LdapArgument, LDAPMessage[]>}
 * @implements {OPERATION<LdapArgument, LDAPMessage[]>}
 */
export const ldapTransport: OPERATION<LdapArgument, LDAPMessage[]> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LdapArgument,
        "&ResultType": $._decodeSequenceOf<LDAPMessage>(
            () => _decode_LDAPMessage
        ),
    },
    encoderFor: {
        "&ArgumentType": _encode_LdapArgument,
        "&ResultType": $._encodeSequenceOf<LDAPMessage>(
            () => _encode_LDAPMessage,
            $.BER
        ),
    },
    "&Errors": [abandonFailed, abandoned] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_ldapTransport /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
