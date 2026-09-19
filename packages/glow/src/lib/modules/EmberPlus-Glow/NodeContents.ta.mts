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
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";


/**
 * @summary NodeContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NodeContents ::= SET {
 *         identifier       [0] EmberString  OPTIONAL,
 *         description      [1] EmberString  OPTIONAL,
 *         isRoot           [2] BOOLEAN      OPTIONAL,
 *         isOnline         [3] BOOLEAN      OPTIONAL,   -- default is true
 *         schemaIdentifiers[4] EmberString  OPTIONAL,
 *         templateReference[5] RELATIVE-OID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class NodeContents {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OPTIONAL<EmberString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<EmberString>,
        /**
         * @summary `isRoot`.
         * @public
         * @readonly
         */
        readonly isRoot: OPTIONAL<BOOLEAN>,
        /**
         * @summary `isOnline`.
         * @public
         * @readonly
         */
        readonly isOnline: OPTIONAL<BOOLEAN>,
        /**
         * @summary `schemaIdentifiers`.
         * @public
         * @readonly
         */
        readonly schemaIdentifiers: OPTIONAL<EmberString>,
        /**
         * @summary `templateReference`.
         * @public
         * @readonly
         */
        readonly templateReference: OPTIONAL<RELATIVE_OID>
    ) {}

    /**
     * @summary Restructures an object into a NodeContents
     * @description
     * 
     * This takes an `object` and converts it to a `NodeContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NodeContents`.
     * @returns {NodeContents}
     */
    public static _from_object (_o: { [_K in keyof (NodeContents)]: (NodeContents)[_K] }): NodeContents {
        return new NodeContents(_o.identifier, _o.description, _o.isRoot, _o.isOnline, _o.schemaIdentifiers, _o.templateReference);
    }


}

/**
 * @summary The Leading Root Component Types of NodeContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NodeContents: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("isRoot", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("isOnline", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("schemaIdentifiers", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("templateReference", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of NodeContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NodeContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NodeContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NodeContents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NodeContents: $.ASN1Decoder<NodeContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NodeContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NodeContents (el: _Element): NodeContents {
    if (!_cached_decoder_for_NodeContents) { _cached_decoder_for_NodeContents = function (el: _Element): NodeContents {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let identifier: OPTIONAL<EmberString>;
    let description: OPTIONAL<EmberString>;
    let isRoot: OPTIONAL<BOOLEAN>;
    let isOnline: OPTIONAL<BOOLEAN>;
    let schemaIdentifiers: OPTIONAL<EmberString>;
    let templateReference: OPTIONAL<RELATIVE_OID>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "isRoot": (_el: _Element): void => { isRoot = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "isOnline": (_el: _Element): void => { isOnline = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "schemaIdentifiers": (_el: _Element): void => { schemaIdentifiers = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "templateReference": (_el: _Element): void => { templateReference = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_NodeContents,
        _extension_additions_list_spec_for_NodeContents,
        _root_component_type_list_2_spec_for_NodeContents,
        undefined,
    );
    return new NodeContents( /* SET_CONSTRUCTOR_CALL */
        identifier,
        description,
        isRoot,
        isOnline,
        schemaIdentifiers,
        templateReference
    );
}; }
    return _cached_decoder_for_NodeContents(el);
}

let _cached_encoder_for_NodeContents: $.ASN1Encoder<NodeContents> | null = null;

/**
 * @summary Encodes a(n) NodeContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NodeContents, encoded as an ASN.1 Element.
 */
export
function _encode_NodeContents (value: NodeContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NodeContents) { _cached_encoder_for_NodeContents = function (value: NodeContents, elGetter: $.ASN1Encoder<NodeContents>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_EmberString, $.BER)(value.identifier, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EmberString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.isRoot === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.isRoot, $.BER)),
            /* IF_ABSENT  */ ((value.isOnline === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.isOnline, $.BER)),
            /* IF_ABSENT  */ ((value.schemaIdentifiers === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_EmberString, $.BER)(value.schemaIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.templateReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => $._encodeRelativeOID, $.BER)(value.templateReference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NodeContents(value, elGetter);
}


/* eslint-enable */
