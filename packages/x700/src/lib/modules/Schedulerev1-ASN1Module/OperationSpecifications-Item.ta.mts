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
    OperationSpecifications_Item_scheduledOperations,
    _decode_OperationSpecifications_Item_scheduledOperations,
    _encode_OperationSpecifications_Item_scheduledOperations,
} from '../Schedulerev1-ASN1Module/OperationSpecifications-Item-scheduledOperations.ta.mjs';
export {
    OperationSpecifications_Item_scheduledOperations,
    _decode_OperationSpecifications_Item_scheduledOperations,
    _encode_OperationSpecifications_Item_scheduledOperations,
} from '../Schedulerev1-ASN1Module/OperationSpecifications-Item-scheduledOperations.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OperationSpecifications_Item */
/**
 * @summary OperationSpecifications_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationSpecifications-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OperationSpecifications_Item {
    constructor(
        /**
         * @summary `scheduledObjects`.
         * @public
         * @readonly
         */
        readonly scheduledObjects: ObjectInstance[],
        /**
         * @summary `scheduledOperations`.
         * @public
         * @readonly
         */
        readonly scheduledOperations: OperationSpecifications_Item_scheduledOperations
    ) {}

    /**
     * @summary Restructures an object into a OperationSpecifications_Item
     * @description
     *
     * This takes an `object` and converts it to a `OperationSpecifications_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperationSpecifications_Item`.
     * @returns {OperationSpecifications_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof OperationSpecifications_Item]: OperationSpecifications_Item[_K];
        }
    ): OperationSpecifications_Item {
        return new OperationSpecifications_Item(
            _o.scheduledObjects,
            _o.scheduledOperations
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OperationSpecifications_Item */
/**
 * @summary The Leading Root Component Types of OperationSpecifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OperationSpecifications_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scheduledObjects',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'scheduledOperations',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OperationSpecifications_Item */
/**
 * @summary The Trailing Root Component Types of OperationSpecifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OperationSpecifications_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OperationSpecifications_Item */
/**
 * @summary The Extension Addition Component Types of OperationSpecifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OperationSpecifications_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationSpecifications_Item */
let _cached_decoder_for_OperationSpecifications_Item: $.ASN1Decoder<OperationSpecifications_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _decode_OperationSpecifications_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationSpecifications_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationSpecifications_Item} The decoded data structure.
 */
export function _decode_OperationSpecifications_Item(el: _Element) {
    if (!_cached_decoder_for_OperationSpecifications_Item) {
        _cached_decoder_for_OperationSpecifications_Item = function (
            el: _Element
        ): OperationSpecifications_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'OperationSpecifications-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'scheduledObjects';
            sequence[1].name = 'scheduledOperations';
            let scheduledObjects!: ObjectInstance[];
            let scheduledOperations!: OperationSpecifications_Item_scheduledOperations;
            scheduledObjects = $._decodeSetOf<ObjectInstance>(
                () => _decode_ObjectInstance
            )(sequence[0]);
            scheduledOperations = _decode_OperationSpecifications_Item_scheduledOperations(
                sequence[1]
            );
            return new OperationSpecifications_Item(
                scheduledObjects,
                scheduledOperations
            );
        };
    }
    return _cached_decoder_for_OperationSpecifications_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationSpecifications_Item */
let _cached_encoder_for_OperationSpecifications_Item: $.ASN1Encoder<OperationSpecifications_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationSpecifications_Item */

/* START_OF_SYMBOL_DEFINITION _encode_OperationSpecifications_Item */
/**
 * @summary Encodes a(n) OperationSpecifications_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationSpecifications_Item, encoded as an ASN.1 Element.
 */
export function _encode_OperationSpecifications_Item(
    value: OperationSpecifications_Item,
    elGetter: $.ASN1Encoder<OperationSpecifications_Item>
) {
    if (!_cached_encoder_for_OperationSpecifications_Item) {
        _cached_encoder_for_OperationSpecifications_Item = function (
            value: OperationSpecifications_Item,
            elGetter: $.ASN1Encoder<OperationSpecifications_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.scheduledObjects, $.BER),
                        /* REQUIRED   */ _encode_OperationSpecifications_Item_scheduledOperations(
                            value.scheduledOperations,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OperationSpecifications_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationSpecifications_Item */

/* eslint-enable */
