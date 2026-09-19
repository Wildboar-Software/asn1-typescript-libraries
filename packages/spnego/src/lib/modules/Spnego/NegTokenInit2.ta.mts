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
import { MechTypeList, _decode_MechTypeList, _encode_MechTypeList } from "../Spnego/MechTypeList.ta.mjs";
// export { MechTypeList, _decode_MechTypeList, _encode_MechTypeList } from "../Spnego/MechTypeList.ta.mjs";
import { ContextFlags, ContextFlags_delegFlag /* IMPORTED_LONG_NAMED_BIT */, delegFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_mutualFlag /* IMPORTED_LONG_NAMED_BIT */, mutualFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_replayFlag /* IMPORTED_LONG_NAMED_BIT */, replayFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_sequenceFlag /* IMPORTED_LONG_NAMED_BIT */, sequenceFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_anonFlag /* IMPORTED_LONG_NAMED_BIT */, anonFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_confFlag /* IMPORTED_LONG_NAMED_BIT */, confFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_integFlag /* IMPORTED_LONG_NAMED_BIT */, integFlag /* IMPORTED_SHORT_NAMED_BIT */, _decode_ContextFlags, _encode_ContextFlags } from "../Spnego/ContextFlags.ta.mjs";
// export { ContextFlags, ContextFlags_delegFlag /* IMPORTED_LONG_NAMED_BIT */, delegFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_mutualFlag /* IMPORTED_LONG_NAMED_BIT */, mutualFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_replayFlag /* IMPORTED_LONG_NAMED_BIT */, replayFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_sequenceFlag /* IMPORTED_LONG_NAMED_BIT */, sequenceFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_anonFlag /* IMPORTED_LONG_NAMED_BIT */, anonFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_confFlag /* IMPORTED_LONG_NAMED_BIT */, confFlag /* IMPORTED_SHORT_NAMED_BIT */, ContextFlags_integFlag /* IMPORTED_LONG_NAMED_BIT */, integFlag /* IMPORTED_SHORT_NAMED_BIT */, _decode_ContextFlags, _encode_ContextFlags } from "../Spnego/ContextFlags.ta.mjs";
import { NegHints, _decode_NegHints, _encode_NegHints } from "../Spnego/NegHints.ta.mjs";
// export { NegHints, _decode_NegHints, _encode_NegHints } from "../Spnego/NegHints.ta.mjs";


/**
 * @summary NegTokenInit2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenInit2 ::= SEQUENCE {
 *         mechTypes       [0] MechTypeList OPTIONAL,
 *         reqFlags        [1] ContextFlags OPTIONAL,
 *         mechToken       [2] OCTET STRING OPTIONAL,
 *         negHints        [3] NegHints OPTIONAL,
 *         mechListMIC     [4] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NegTokenInit2 {
    constructor (
        /**
         * @summary `mechTypes`.
         * @public
         * @readonly
         */
        readonly mechTypes: OPTIONAL<MechTypeList>,
        /**
         * @summary `reqFlags`.
         * @public
         * @readonly
         */
        readonly reqFlags: OPTIONAL<ContextFlags>,
        /**
         * @summary `mechToken`.
         * @public
         * @readonly
         */
        readonly mechToken: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `negHints`.
         * @public
         * @readonly
         */
        readonly negHints: OPTIONAL<NegHints>,
        /**
         * @summary `mechListMIC`.
         * @public
         * @readonly
         */
        readonly mechListMIC: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a NegTokenInit2
     * @description
     * 
     * This takes an `object` and converts it to a `NegTokenInit2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NegTokenInit2`.
     * @returns {NegTokenInit2}
     */
    public static _from_object (_o: { [_K in keyof (NegTokenInit2)]: (NegTokenInit2)[_K] }): NegTokenInit2 {
        return new NegTokenInit2(_o.mechTypes, _o.reqFlags, _o.mechToken, _o.negHints, _o.mechListMIC);
    }


}

/**
 * @summary The Leading Root Component Types of NegTokenInit2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NegTokenInit2: $.ComponentSpec[] = [
    new $.ComponentSpec("mechTypes", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reqFlags", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mechToken", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("negHints", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mechListMIC", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NegTokenInit2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NegTokenInit2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NegTokenInit2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NegTokenInit2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NegTokenInit2: $.ASN1Decoder<NegTokenInit2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegTokenInit2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegTokenInit2 (el: _Element): NegTokenInit2 {
    if (!_cached_decoder_for_NegTokenInit2) { _cached_decoder_for_NegTokenInit2 = function (el: _Element): NegTokenInit2 {
    let mechTypes: OPTIONAL<MechTypeList>;
    let reqFlags: OPTIONAL<ContextFlags>;
    let mechToken: OPTIONAL<OCTET_STRING>;
    let negHints: OPTIONAL<NegHints>;
    let mechListMIC: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "mechTypes": (_el: _Element): void => { mechTypes = $._decode_explicit<MechTypeList>(() => _decode_MechTypeList)(_el); },
        "reqFlags": (_el: _Element): void => { reqFlags = $._decode_explicit<ContextFlags>(() => _decode_ContextFlags)(_el); },
        "mechToken": (_el: _Element): void => { mechToken = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "negHints": (_el: _Element): void => { negHints = $._decode_explicit<NegHints>(() => _decode_NegHints)(_el); },
        "mechListMIC": (_el: _Element): void => { mechListMIC = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NegTokenInit2,
        _extension_additions_list_spec_for_NegTokenInit2,
        _root_component_type_list_2_spec_for_NegTokenInit2,
        undefined,
    );
    return new NegTokenInit2(
        mechTypes,
        reqFlags,
        mechToken,
        negHints,
        mechListMIC
    );
}; }
    return _cached_decoder_for_NegTokenInit2(el);
}

let _cached_encoder_for_NegTokenInit2: $.ASN1Encoder<NegTokenInit2> | null = null;

/**
 * @summary Encodes a(n) NegTokenInit2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegTokenInit2, encoded as an ASN.1 Element.
 */
export
function _encode_NegTokenInit2 (value: NegTokenInit2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegTokenInit2) { _cached_encoder_for_NegTokenInit2 = function (value: NegTokenInit2, elGetter: $.ASN1Encoder<NegTokenInit2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mechTypes === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_MechTypeList, $.BER)(value.mechTypes, $.BER)),
            /* IF_ABSENT  */ ((value.reqFlags === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ContextFlags, $.BER)(value.reqFlags, $.BER)),
            /* IF_ABSENT  */ ((value.mechToken === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.mechToken, $.BER)),
            /* IF_ABSENT  */ ((value.negHints === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_NegHints, $.BER)(value.negHints, $.BER)),
            /* IF_ABSENT  */ ((value.mechListMIC === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mechListMIC, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NegTokenInit2(value, elGetter);
}


/* eslint-enable */
