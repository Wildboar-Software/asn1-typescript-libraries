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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
import { ModemIdentity_Item_multimediaMode, ModemIdentity_Item_multimediaMode_dataMode /* IMPORTED_LONG_NAMED_BIT */, dataMode /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_faxT30 /* IMPORTED_LONG_NAMED_BIT */, faxT30 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_faxT30C /* IMPORTED_LONG_NAMED_BIT */, faxT30C /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_fAXT30F /* IMPORTED_LONG_NAMED_BIT */, fAXT30F /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_voiceV253 /* IMPORTED_LONG_NAMED_BIT */, voiceV253 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_sVDV70 /* IMPORTED_LONG_NAMED_BIT */, sVDV70 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_sVDV61 /* IMPORTED_LONG_NAMED_BIT */, sVDV61 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_vidTelH324 /* IMPORTED_LONG_NAMED_BIT */, vidTelH324 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_v80other /* IMPORTED_LONG_NAMED_BIT */, v80other /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_v18Text /* IMPORTED_LONG_NAMED_BIT */, v18Text /* IMPORTED_SHORT_NAMED_BIT */, _decode_ModemIdentity_Item_multimediaMode, _encode_ModemIdentity_Item_multimediaMode } from "../V59/ModemIdentity-Item-multimediaMode.ta.mjs";
// export { ModemIdentity_Item_multimediaMode, ModemIdentity_Item_multimediaMode_dataMode /* IMPORTED_LONG_NAMED_BIT */, dataMode /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_faxT30 /* IMPORTED_LONG_NAMED_BIT */, faxT30 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_faxT30C /* IMPORTED_LONG_NAMED_BIT */, faxT30C /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_fAXT30F /* IMPORTED_LONG_NAMED_BIT */, fAXT30F /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_voiceV253 /* IMPORTED_LONG_NAMED_BIT */, voiceV253 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_sVDV70 /* IMPORTED_LONG_NAMED_BIT */, sVDV70 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_sVDV61 /* IMPORTED_LONG_NAMED_BIT */, sVDV61 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_vidTelH324 /* IMPORTED_LONG_NAMED_BIT */, vidTelH324 /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_v80other /* IMPORTED_LONG_NAMED_BIT */, v80other /* IMPORTED_SHORT_NAMED_BIT */, ModemIdentity_Item_multimediaMode_v18Text /* IMPORTED_LONG_NAMED_BIT */, v18Text /* IMPORTED_SHORT_NAMED_BIT */, _decode_ModemIdentity_Item_multimediaMode, _encode_ModemIdentity_Item_multimediaMode } from "../V59/ModemIdentity-Item-multimediaMode.ta.mjs";


/**
 * @summary ModemIdentity_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemIdentity-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ModemIdentity_Item {
    constructor (
        /**
         * @summary `manufacturer`.
         * @public
         * @readonly
         */
        readonly manufacturer: V59String,
        /**
         * @summary `model`.
         * @public
         * @readonly
         */
        readonly model: V59String,
        /**
         * @summary `firmwareVersion`.
         * @public
         * @readonly
         */
        readonly firmwareVersion: V59String,
        /**
         * @summary `diagnosticVersion`.
         * @public
         * @readonly
         */
        readonly diagnosticVersion: V59String,
        /**
         * @summary `multimediaMode`.
         * @public
         * @readonly
         */
        readonly multimediaMode: OPTIONAL<ModemIdentity_Item_multimediaMode>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModemIdentity_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ModemIdentity_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModemIdentity_Item`.
     * @returns {ModemIdentity_Item}
     */
    public static _from_object (_o: { [_K in keyof (ModemIdentity_Item)]: (ModemIdentity_Item)[_K] }): ModemIdentity_Item {
        return new ModemIdentity_Item(_o.manufacturer, _o.model, _o.firmwareVersion, _o.diagnosticVersion, _o.multimediaMode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ModemIdentity_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModemIdentity_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("manufacturer", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("model", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("firmwareVersion", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("diagnosticVersion", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("multimediaMode", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModemIdentity_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModemIdentity_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModemIdentity_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModemIdentity_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModemIdentity_Item: $.ASN1Decoder<ModemIdentity_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModemIdentity_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModemIdentity_Item (el: _Element): ModemIdentity_Item {
    if (!_cached_decoder_for_ModemIdentity_Item) { _cached_decoder_for_ModemIdentity_Item = function (el: _Element): ModemIdentity_Item {
    let manufacturer!: V59String;
    let model!: V59String;
    let firmwareVersion!: V59String;
    let diagnosticVersion!: V59String;
    let multimediaMode: OPTIONAL<ModemIdentity_Item_multimediaMode>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "manufacturer": (_el: _Element): void => { manufacturer = _decode_V59String(_el); },
        "model": (_el: _Element): void => { model = _decode_V59String(_el); },
        "firmwareVersion": (_el: _Element): void => { firmwareVersion = _decode_V59String(_el); },
        "diagnosticVersion": (_el: _Element): void => { diagnosticVersion = _decode_V59String(_el); },
        "multimediaMode": (_el: _Element): void => { multimediaMode = _decode_ModemIdentity_Item_multimediaMode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModemIdentity_Item,
        _extension_additions_list_spec_for_ModemIdentity_Item,
        _root_component_type_list_2_spec_for_ModemIdentity_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModemIdentity_Item(
        manufacturer,
        model,
        firmwareVersion,
        diagnosticVersion,
        multimediaMode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModemIdentity_Item(el);
}

let _cached_encoder_for_ModemIdentity_Item: $.ASN1Encoder<ModemIdentity_Item> | null = null;

/**
 * @summary Encodes a(n) ModemIdentity_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModemIdentity_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ModemIdentity_Item (value: ModemIdentity_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModemIdentity_Item) { _cached_encoder_for_ModemIdentity_Item = function (value: ModemIdentity_Item, elGetter: $.ASN1Encoder<ModemIdentity_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.manufacturer, $.BER),
            /* REQUIRED   */ _encode_V59String(value.model, $.BER),
            /* REQUIRED   */ _encode_V59String(value.firmwareVersion, $.BER),
            /* REQUIRED   */ _encode_V59String(value.diagnosticVersion, $.BER),
            /* IF_ABSENT  */ ((value.multimediaMode === undefined) ? undefined : _encode_ModemIdentity_Item_multimediaMode(value.multimediaMode, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModemIdentity_Item(value, elGetter);
}


/* eslint-enable */
