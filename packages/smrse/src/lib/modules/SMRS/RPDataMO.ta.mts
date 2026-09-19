/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
// export { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
import { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
// export { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
import { RP_UD, _decode_RP_UD, _encode_RP_UD } from "../SMRS/RP-UD.ta.mjs";
// export { RP_UD, _decode_RP_UD, _encode_RP_UD } from "../SMRS/RP-UD.ta.mjs";
import { IMSI_Address, _decode_IMSI_Address, _encode_IMSI_Address } from "../SMRS/IMSI-Address.ta.mjs";
// export { IMSI_Address, _decode_IMSI_Address, _encode_IMSI_Address } from "../SMRS/IMSI-Address.ta.mjs";


/**
 * @summary RPDataMO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPDataMO ::= SEQUENCE {
 *     mo-message-reference RP-MR,
 *     mo-originating-address SMS-Address,
 *     mo-user-data RP-UD,
 *     origVMSCAddr [1] SMS-Address OPTIONAL ,
 *     moimsi [2] IMSI-Address OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RPDataMO {
    constructor (
        /**
         * @summary `mo_message_reference`.
         * @public
         * @readonly
         */
        readonly mo_message_reference: RP_MR,
        /**
         * @summary `mo_originating_address`.
         * @public
         * @readonly
         */
        readonly mo_originating_address: SMS_Address,
        /**
         * @summary `mo_user_data`.
         * @public
         * @readonly
         */
        readonly mo_user_data: RP_UD,
        /**
         * @summary `origVMSCAddr`.
         * @public
         * @readonly
         */
        readonly origVMSCAddr: OPTIONAL<SMS_Address>,
        /**
         * @summary `moimsi`.
         * @public
         * @readonly
         */
        readonly moimsi: OPTIONAL<IMSI_Address>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RPDataMO
     * @description
     * 
     * This takes an `object` and converts it to a `RPDataMO`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPDataMO`.
     * @returns {RPDataMO}
     */
    public static _from_object (_o: { [_K in keyof (RPDataMO)]: (RPDataMO)[_K] }): RPDataMO {
        return new RPDataMO(_o.mo_message_reference, _o.mo_originating_address, _o.mo_user_data, _o.origVMSCAddr, _o.moimsi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RPDataMO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPDataMO: $.ComponentSpec[] = [
    new $.ComponentSpec("mo-message-reference", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mo-originating-address", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("mo-user-data", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("origVMSCAddr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("moimsi", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RPDataMO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPDataMO: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPDataMO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RPDataMO: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RPDataMO: $.ASN1Decoder<RPDataMO> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPDataMO
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPDataMO (el: _Element): RPDataMO {
    if (!_cached_decoder_for_RPDataMO) { _cached_decoder_for_RPDataMO = function (el: _Element): RPDataMO {
    let mo_message_reference!: RP_MR;
    let mo_originating_address!: SMS_Address;
    let mo_user_data!: RP_UD;
    let origVMSCAddr: OPTIONAL<SMS_Address>;
    let moimsi: OPTIONAL<IMSI_Address>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mo-message-reference": (_el: _Element): void => { mo_message_reference = _decode_RP_MR(_el); },
        "mo-originating-address": (_el: _Element): void => { mo_originating_address = _decode_SMS_Address(_el); },
        "mo-user-data": (_el: _Element): void => { mo_user_data = _decode_RP_UD(_el); },
        "origVMSCAddr": (_el: _Element): void => { origVMSCAddr = $._decode_implicit<SMS_Address>(() => _decode_SMS_Address)(_el); },
        "moimsi": (_el: _Element): void => { moimsi = $._decode_implicit<IMSI_Address>(() => _decode_IMSI_Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RPDataMO,
        _extension_additions_list_spec_for_RPDataMO,
        _root_component_type_list_2_spec_for_RPDataMO,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RPDataMO(
        mo_message_reference,
        mo_originating_address,
        mo_user_data,
        origVMSCAddr,
        moimsi,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RPDataMO(el);
}

let _cached_encoder_for_RPDataMO: $.ASN1Encoder<RPDataMO> | null = null;

/**
 * @summary Encodes a(n) RPDataMO into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPDataMO, encoded as an ASN.1 Element.
 */
export
function _encode_RPDataMO (value: RPDataMO, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPDataMO) { _cached_encoder_for_RPDataMO = function (value: RPDataMO, elGetter: $.ASN1Encoder<RPDataMO>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RP_MR(value.mo_message_reference, $.BER),
            /* REQUIRED   */ _encode_SMS_Address(value.mo_originating_address, $.BER),
            /* REQUIRED   */ _encode_RP_UD(value.mo_user_data, $.BER),
            /* IF_ABSENT  */ ((value.origVMSCAddr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_Address, $.BER)(value.origVMSCAddr, $.BER)),
            /* IF_ABSENT  */ ((value.moimsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMSI_Address, $.BER)(value.moimsi, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPDataMO(value, elGetter);
}


/* eslint-enable */
