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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { RUF_Outcome, _enum_for_RUF_Outcome, RUF_Outcome_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_noResponseFromFreeMS /* IMPORTED_LONG_ENUMERATION_ITEM */, noResponseFromFreeMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_noResponseFromBusyMS /* IMPORTED_LONG_ENUMERATION_ITEM */, noResponseFromBusyMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_udubFromFreeMS /* IMPORTED_LONG_ENUMERATION_ITEM */, udubFromFreeMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_udubFromBusyMS /* IMPORTED_LONG_ENUMERATION_ITEM */, udubFromBusyMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RUF_Outcome, _encode_RUF_Outcome } from "../MAP-CH-DataTypes/RUF-Outcome.ta.mjs";
// export { RUF_Outcome, _enum_for_RUF_Outcome, RUF_Outcome_accepted /* IMPORTED_LONG_ENUMERATION_ITEM */, accepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_noResponseFromFreeMS /* IMPORTED_LONG_ENUMERATION_ITEM */, noResponseFromFreeMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_noResponseFromBusyMS /* IMPORTED_LONG_ENUMERATION_ITEM */, noResponseFromBusyMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_udubFromFreeMS /* IMPORTED_LONG_ENUMERATION_ITEM */, udubFromFreeMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, RUF_Outcome_udubFromBusyMS /* IMPORTED_LONG_ENUMERATION_ITEM */, udubFromBusyMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RUF_Outcome, _encode_RUF_Outcome } from "../MAP-CH-DataTypes/RUF-Outcome.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary RemoteUserFreeRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUserFreeRes ::= SEQUENCE{
 *     ruf-Outcome    [0]    RUF-Outcome,
 *     extensionContainer    [1]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class RemoteUserFreeRes {
    constructor (
        /**
         * @summary `ruf_Outcome`.
         * @public
         * @readonly
         */
        readonly ruf_Outcome: RUF_Outcome,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RemoteUserFreeRes
     * @description
     * 
     * This takes an `object` and converts it to a `RemoteUserFreeRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoteUserFreeRes`.
     * @returns {RemoteUserFreeRes}
     */
    public static _from_object (_o: { [_K in keyof (RemoteUserFreeRes)]: (RemoteUserFreeRes)[_K] }): RemoteUserFreeRes {
        return new RemoteUserFreeRes(_o.ruf_Outcome, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `ruf_Outcome`
         * @public
         * @static
         */

    public static _enum_for_ruf_Outcome = _enum_for_RUF_Outcome;
}

/**
 * @summary The Leading Root Component Types of RemoteUserFreeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoteUserFreeRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ruf-Outcome", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RemoteUserFreeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoteUserFreeRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoteUserFreeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoteUserFreeRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoteUserFreeRes: $.ASN1Decoder<RemoteUserFreeRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUserFreeRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUserFreeRes (el: _Element): RemoteUserFreeRes {
    if (!_cached_decoder_for_RemoteUserFreeRes) { _cached_decoder_for_RemoteUserFreeRes = function (el: _Element): RemoteUserFreeRes {
    let ruf_Outcome!: RUF_Outcome;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ruf-Outcome": (_el: _Element): void => { ruf_Outcome = $._decode_implicit<RUF_Outcome>(() => _decode_RUF_Outcome)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RemoteUserFreeRes,
        _extension_additions_list_spec_for_RemoteUserFreeRes,
        _root_component_type_list_2_spec_for_RemoteUserFreeRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RemoteUserFreeRes(
        ruf_Outcome,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RemoteUserFreeRes(el);
}

let _cached_encoder_for_RemoteUserFreeRes: $.ASN1Encoder<RemoteUserFreeRes> | null = null;

/**
 * @summary Encodes a(n) RemoteUserFreeRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUserFreeRes, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUserFreeRes (value: RemoteUserFreeRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUserFreeRes) { _cached_encoder_for_RemoteUserFreeRes = function (value: RemoteUserFreeRes, elGetter: $.ASN1Encoder<RemoteUserFreeRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RUF_Outcome, $.BER)(value.ruf_Outcome, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RemoteUserFreeRes(value, elGetter);
}


/* eslint-enable */
