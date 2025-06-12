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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    GeneralErrorCause,
    _decode_GeneralErrorCause,
    _encode_GeneralErrorCause,
} from '../ASN1DefinedTypesModule/GeneralErrorCause.ta.mjs';
export {
    GeneralErrorCause,
    _decode_GeneralErrorCause,
    _encode_GeneralErrorCause,
} from '../ASN1DefinedTypesModule/GeneralErrorCause.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.mjs';
export {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION GeneralError_Item */
/**
 * @summary GeneralError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralError-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class GeneralError_Item {
    constructor(
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: GeneralErrorCause,
        /**
         * @summary `details`.
         * @public
         * @readonly
         */
        readonly details: OPTIONAL<GraphicString>,
        /**
         * @summary `relatedObjects`.
         * @public
         * @readonly
         */
        readonly relatedObjects: OPTIONAL<ObjectInstance[]>,
        /**
         * @summary `attributeList`.
         * @public
         * @readonly
         */
        readonly attributeList: OPTIONAL<AttributeList>
    ) {}

    /**
     * @summary Restructures an object into a GeneralError_Item
     * @description
     *
     * This takes an `object` and converts it to a `GeneralError_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralError_Item`.
     * @returns {GeneralError_Item}
     */
    public static _from_object(
        _o: { [_K in keyof GeneralError_Item]: GeneralError_Item[_K] }
    ): GeneralError_Item {
        return new GeneralError_Item(
            _o.cause,
            _o.details,
            _o.relatedObjects,
            _o.attributeList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GeneralError_Item */
/**
 * @summary The Leading Root Component Types of GeneralError_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GeneralError_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('cause', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'details',
        true,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'relatedObjects',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeList',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GeneralError_Item */
/**
 * @summary The Trailing Root Component Types of GeneralError_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GeneralError_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GeneralError_Item */
/**
 * @summary The Extension Addition Component Types of GeneralError_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GeneralError_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralError_Item */
let _cached_decoder_for_GeneralError_Item: $.ASN1Decoder<GeneralError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralError_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralError_Item} The decoded data structure.
 */
export function _decode_GeneralError_Item(el: _Element) {
    if (!_cached_decoder_for_GeneralError_Item) {
        _cached_decoder_for_GeneralError_Item = function (
            el: _Element
        ): GeneralError_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cause!: GeneralErrorCause;
            let details: OPTIONAL<GraphicString>;
            let relatedObjects: OPTIONAL<ObjectInstance[]>;
            let attributeList: OPTIONAL<AttributeList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cause: (_el: _Element): void => {
                    cause = _decode_GeneralErrorCause(_el);
                },
                details: (_el: _Element): void => {
                    details = $._decodeGraphicString(_el);
                },
                relatedObjects: (_el: _Element): void => {
                    relatedObjects = $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSetOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
                    )(_el);
                },
                attributeList: (_el: _Element): void => {
                    attributeList = $._decode_implicit<AttributeList>(
                        () => _decode_AttributeList
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_GeneralError_Item,
                _extension_additions_list_spec_for_GeneralError_Item,
                _root_component_type_list_2_spec_for_GeneralError_Item,
                undefined
            );
            return new GeneralError_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                cause,
                details,
                relatedObjects,
                attributeList
            );
        };
    }
    return _cached_decoder_for_GeneralError_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralError_Item */
let _cached_encoder_for_GeneralError_Item: $.ASN1Encoder<GeneralError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralError_Item */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralError_Item */
/**
 * @summary Encodes a(n) GeneralError_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralError_Item, encoded as an ASN.1 Element.
 */
export function _encode_GeneralError_Item(
    value: GeneralError_Item,
    elGetter: $.ASN1Encoder<GeneralError_Item>
) {
    if (!_cached_encoder_for_GeneralError_Item) {
        _cached_encoder_for_GeneralError_Item = function (
            value: GeneralError_Item,
            elGetter: $.ASN1Encoder<GeneralError_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralErrorCause(
                            value.cause,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.details === undefined
                            ? undefined
                            : $._encodeGraphicString(value.details, $.BER),
                        /* IF_ABSENT  */ value.relatedObjects === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<ObjectInstance>(
                                          () => _encode_ObjectInstance,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.relatedObjects, $.BER),
                        /* IF_ABSENT  */ value.attributeList === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AttributeList,
                                  $.BER
                              )(value.attributeList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_GeneralError_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralError_Item */

/* eslint-enable */
