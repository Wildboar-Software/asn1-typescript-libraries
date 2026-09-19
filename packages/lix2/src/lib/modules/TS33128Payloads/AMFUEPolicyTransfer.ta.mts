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
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { UEPolicy, _decode_UEPolicy, _encode_UEPolicy } from "../TS33128Payloads/UEPolicy.ta.mjs";
// export { UEPolicy, _decode_UEPolicy, _encode_UEPolicy } from "../TS33128Payloads/UEPolicy.ta.mjs";


/**
 * @summary AMFUEPolicyTransfer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUEPolicyTransfer ::= SEQUENCE
 * {
 *     sUPI                            [1] SUPI,
 *     sUCI                            [2] SUCI OPTIONAL,
 *     pEI                             [3] PEI OPTIONAL,
 *     gPSI                            [4] GPSI OPTIONAL,
 *     gUTI                            [5] FiveGGUTI OPTIONAL,
 *     uEPolicy                        [6] UEPolicy
 * }
 * ```
 * 
 * @class
 */
export
class AMFUEPolicyTransfer {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: OPTIONAL<SUCI>,
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
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<FiveGGUTI>,
        /**
         * @summary `uEPolicy`.
         * @public
         * @readonly
         */
        readonly uEPolicy: UEPolicy
    ) {}

    /**
     * @summary Restructures an object into a AMFUEPolicyTransfer
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUEPolicyTransfer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUEPolicyTransfer`.
     * @returns {AMFUEPolicyTransfer}
     */
    public static _from_object (_o: { [_K in keyof (AMFUEPolicyTransfer)]: (AMFUEPolicyTransfer)[_K] }): AMFUEPolicyTransfer {
        return new AMFUEPolicyTransfer(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.uEPolicy);
    }


}

/**
 * @summary The Leading Root Component Types of AMFUEPolicyTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUEPolicyTransfer: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uEPolicy", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of AMFUEPolicyTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUEPolicyTransfer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUEPolicyTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUEPolicyTransfer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUEPolicyTransfer: $.ASN1Decoder<AMFUEPolicyTransfer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUEPolicyTransfer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUEPolicyTransfer (el: _Element): AMFUEPolicyTransfer {
    if (!_cached_decoder_for_AMFUEPolicyTransfer) { _cached_decoder_for_AMFUEPolicyTransfer = function (el: _Element): AMFUEPolicyTransfer {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let uEPolicy!: UEPolicy;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "uEPolicy": (_el: _Element): void => { uEPolicy = $._decode_implicit<UEPolicy>(() => _decode_UEPolicy)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUEPolicyTransfer,
        _extension_additions_list_spec_for_AMFUEPolicyTransfer,
        _root_component_type_list_2_spec_for_AMFUEPolicyTransfer,
        undefined,
    );
    return new AMFUEPolicyTransfer(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        uEPolicy
    );
}; }
    return _cached_decoder_for_AMFUEPolicyTransfer(el);
}

let _cached_encoder_for_AMFUEPolicyTransfer: $.ASN1Encoder<AMFUEPolicyTransfer> | null = null;

/**
 * @summary Encodes a(n) AMFUEPolicyTransfer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUEPolicyTransfer, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUEPolicyTransfer (value: AMFUEPolicyTransfer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUEPolicyTransfer) { _cached_encoder_for_AMFUEPolicyTransfer = function (value: AMFUEPolicyTransfer, elGetter: $.ASN1Encoder<AMFUEPolicyTransfer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_UEPolicy, $.BER)(value.uEPolicy, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFUEPolicyTransfer(value, elGetter);
}


/* eslint-enable */
