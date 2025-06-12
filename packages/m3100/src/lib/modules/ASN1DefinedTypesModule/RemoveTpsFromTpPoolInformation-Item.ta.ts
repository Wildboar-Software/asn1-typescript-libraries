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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION RemoveTpsFromTpPoolInformation_Item */
/**
 * @summary RemoveTpsFromTpPoolInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromTpPoolInformation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RemoveTpsFromTpPoolInformation_Item {
    constructor(
        /**
         * @summary `fromTpPool`.
         * @public
         * @readonly
         */
        readonly fromTpPool: ObjectInstance,
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a RemoveTpsFromTpPoolInformation_Item
     * @description
     *
     * This takes an `object` and converts it to a `RemoveTpsFromTpPoolInformation_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveTpsFromTpPoolInformation_Item`.
     * @returns {RemoveTpsFromTpPoolInformation_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof RemoveTpsFromTpPoolInformation_Item]: RemoveTpsFromTpPoolInformation_Item[_K];
        }
    ): RemoveTpsFromTpPoolInformation_Item {
        return new RemoveTpsFromTpPoolInformation_Item(_o.fromTpPool, _o.tps);
    }
}
/* END_OF_SYMBOL_DEFINITION RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveTpsFromTpPoolInformation_Item */
/**
 * @summary The Leading Root Component Types of RemoveTpsFromTpPoolInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RemoveTpsFromTpPoolInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTpPool', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveTpsFromTpPoolInformation_Item */
/**
 * @summary The Trailing Root Component Types of RemoveTpsFromTpPoolInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RemoveTpsFromTpPoolInformation_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveTpsFromTpPoolInformation_Item */
/**
 * @summary The Extension Addition Component Types of RemoveTpsFromTpPoolInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RemoveTpsFromTpPoolInformation_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromTpPoolInformation_Item */
let _cached_decoder_for_RemoveTpsFromTpPoolInformation_Item: $.ASN1Decoder<RemoveTpsFromTpPoolInformation_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromTpPoolInformation_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromTpPoolInformation_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromTpPoolInformation_Item} The decoded data structure.
 */
export function _decode_RemoveTpsFromTpPoolInformation_Item(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromTpPoolInformation_Item) {
        _cached_decoder_for_RemoveTpsFromTpPoolInformation_Item = function (
            el: _Element
        ): RemoveTpsFromTpPoolInformation_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RemoveTpsFromTpPoolInformation-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTpPool';
            sequence[1].name = 'tps';
            let fromTpPool!: ObjectInstance;
            let tps!: ObjectInstance[];
            fromTpPool = _decode_ObjectInstance(sequence[0]);
            tps = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance)(
                sequence[1]
            );
            return new RemoveTpsFromTpPoolInformation_Item(fromTpPool, tps);
        };
    }
    return _cached_decoder_for_RemoveTpsFromTpPoolInformation_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromTpPoolInformation_Item */
let _cached_encoder_for_RemoveTpsFromTpPoolInformation_Item: $.ASN1Encoder<RemoveTpsFromTpPoolInformation_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromTpPoolInformation_Item */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromTpPoolInformation_Item */
/**
 * @summary Encodes a(n) RemoveTpsFromTpPoolInformation_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromTpPoolInformation_Item, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromTpPoolInformation_Item(
    value: RemoveTpsFromTpPoolInformation_Item,
    elGetter: $.ASN1Encoder<RemoveTpsFromTpPoolInformation_Item>
) {
    if (!_cached_encoder_for_RemoveTpsFromTpPoolInformation_Item) {
        _cached_encoder_for_RemoveTpsFromTpPoolInformation_Item = function (
            value: RemoveTpsFromTpPoolInformation_Item,
            elGetter: $.ASN1Encoder<RemoveTpsFromTpPoolInformation_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.fromTpPool,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.tps, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RemoveTpsFromTpPoolInformation_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromTpPoolInformation_Item */

/* eslint-enable */
