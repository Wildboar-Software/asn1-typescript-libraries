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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
// export { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
import { ForwardingOptions, _decode_ForwardingOptions, _encode_ForwardingOptions } from "../MAP-SS-DataTypes/ForwardingOptions.ta.mjs";
// export { ForwardingOptions, _decode_ForwardingOptions, _encode_ForwardingOptions } from "../MAP-SS-DataTypes/ForwardingOptions.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { FTN_AddressString, _decode_FTN_AddressString, _encode_FTN_AddressString } from "../MAP-CommonDataTypes/FTN-AddressString.ta.mjs";
// export { FTN_AddressString, _decode_FTN_AddressString, _encode_FTN_AddressString } from "../MAP-CommonDataTypes/FTN-AddressString.ta.mjs";


/**
 * @summary ForwardingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingData ::= SEQUENCE {
 *     forwardedToNumber    [5] ISDN-AddressString    OPTIONAL,
 *     -- When this datatype is sent from an HLR which supports CAMEL Phase 2
 *     -- to a GMSC which supports CAMEL Phase 2 the GMSC shall not check the
 *     -- format of the number
 *     forwardedToSubaddress    [4] ISDN-SubaddressString    OPTIONAL,
 *     forwardingOptions    [6] ForwardingOptions    OPTIONAL,
 *     extensionContainer    [7] ExtensionContainer    OPTIONAL,
 *     ...,
 *     longForwardedToNumber    [8] FTN-AddressString    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ForwardingData {
    constructor (
        /**
         * @summary `forwardedToNumber`.
         * @public
         * @readonly
         */
        readonly forwardedToNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `forwardedToSubaddress`.
         * @public
         * @readonly
         */
        readonly forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>,
        /**
         * @summary `forwardingOptions`.
         * @public
         * @readonly
         */
        readonly forwardingOptions: OPTIONAL<ForwardingOptions>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `longForwardedToNumber`.
         * @public
         * @readonly
         */
        readonly longForwardedToNumber: OPTIONAL<FTN_AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ForwardingData
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardingData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardingData`.
     * @returns {ForwardingData}
     */
    public static _from_object (_o: { [_K in keyof (ForwardingData)]: (ForwardingData)[_K] }): ForwardingData {
        return new ForwardingData(_o.forwardedToNumber, _o.forwardedToSubaddress, _o.forwardingOptions, _o.extensionContainer, _o.longForwardedToNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardingData: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardedToNumber", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("forwardedToSubaddress", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("forwardingOptions", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ForwardingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardingData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardingData: $.ComponentSpec[] = [
    new $.ComponentSpec("longForwardedToNumber", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

let _cached_decoder_for_ForwardingData: $.ASN1Decoder<ForwardingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingData (el: _Element): ForwardingData {
    if (!_cached_decoder_for_ForwardingData) { _cached_decoder_for_ForwardingData = function (el: _Element): ForwardingData {
    let forwardedToNumber: OPTIONAL<ISDN_AddressString>;
    let forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>;
    let forwardingOptions: OPTIONAL<ForwardingOptions>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let longForwardedToNumber: OPTIONAL<FTN_AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "forwardedToNumber": (_el: _Element): void => { forwardedToNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "forwardedToSubaddress": (_el: _Element): void => { forwardedToSubaddress = $._decode_implicit<ISDN_SubaddressString>(() => _decode_ISDN_SubaddressString)(_el); },
        "forwardingOptions": (_el: _Element): void => { forwardingOptions = $._decode_implicit<ForwardingOptions>(() => _decode_ForwardingOptions)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "longForwardedToNumber": (_el: _Element): void => { longForwardedToNumber = $._decode_implicit<FTN_AddressString>(() => _decode_FTN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardingData,
        _extension_additions_list_spec_for_ForwardingData,
        _root_component_type_list_2_spec_for_ForwardingData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ForwardingData(
        forwardedToNumber,
        forwardedToSubaddress,
        forwardingOptions,
        extensionContainer,
        longForwardedToNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ForwardingData(el);
}

let _cached_encoder_for_ForwardingData: $.ASN1Encoder<ForwardingData> | null = null;

/**
 * @summary Encodes a(n) ForwardingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingData, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingData (value: ForwardingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingData) { _cached_encoder_for_ForwardingData = function (value: ForwardingData, elGetter: $.ASN1Encoder<ForwardingData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.forwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ISDN_AddressString, $.BER)(value.forwardedToNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToSubaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ISDN_SubaddressString, $.BER)(value.forwardedToSubaddress, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ForwardingOptions, $.BER)(value.forwardingOptions, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.longForwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_FTN_AddressString, $.BER)(value.longForwardedToNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardingData(value, elGetter);
}


/* eslint-enable */
