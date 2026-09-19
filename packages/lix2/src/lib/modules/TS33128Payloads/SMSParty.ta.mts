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
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SMSAddress, _decode_SMSAddress, _encode_SMSAddress } from "../TS33128Payloads/SMSAddress.ta.mjs";
// export { SMSAddress, _decode_SMSAddress, _encode_SMSAddress } from "../TS33128Payloads/SMSAddress.ta.mjs";


/**
 * @summary SMSParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSParty ::= SEQUENCE
 * {
 *     sUPI        [1] SUPI OPTIONAL,
 *     pEI         [2] PEI OPTIONAL,
 *     gPSI        [3] GPSI OPTIONAL,
 *     sMSAddress  [4] SMSAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMSParty {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `sMSAddress`.
         * @public
         * @readonly
         */
        readonly sMSAddress: OPTIONAL<SMSAddress>
    ) {}

    /**
     * @summary Restructures an object into a SMSParty
     * @description
     * 
     * This takes an `object` and converts it to a `SMSParty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMSParty`.
     * @returns {SMSParty}
     */
    public static _from_object (_o: { [_K in keyof (SMSParty)]: (SMSParty)[_K] }): SMSParty {
        return new SMSParty(_o.sUPI, _o.pEI, _o.gPSI, _o.sMSAddress);
    }


}

/**
 * @summary The Leading Root Component Types of SMSParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMSParty: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sMSAddress", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SMSParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMSParty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMSParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMSParty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMSParty: $.ASN1Decoder<SMSParty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSParty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSParty (el: _Element): SMSParty {
    if (!_cached_decoder_for_SMSParty) { _cached_decoder_for_SMSParty = function (el: _Element): SMSParty {
    let sUPI: OPTIONAL<SUPI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let sMSAddress: OPTIONAL<SMSAddress>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "sMSAddress": (_el: _Element): void => { sMSAddress = $._decode_implicit<SMSAddress>(() => _decode_SMSAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMSParty,
        _extension_additions_list_spec_for_SMSParty,
        _root_component_type_list_2_spec_for_SMSParty,
        undefined,
    );
    return new SMSParty(
        sUPI,
        pEI,
        gPSI,
        sMSAddress
    );
}; }
    return _cached_decoder_for_SMSParty(el);
}

let _cached_encoder_for_SMSParty: $.ASN1Encoder<SMSParty> | null = null;

/**
 * @summary Encodes a(n) SMSParty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSParty, encoded as an ASN.1 Element.
 */
export
function _encode_SMSParty (value: SMSParty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSParty) { _cached_encoder_for_SMSParty = function (value: SMSParty, elGetter: $.ASN1Encoder<SMSParty>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.sMSAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SMSAddress, $.BER)(value.sMSAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMSParty(value, elGetter);
}


/* eslint-enable */
