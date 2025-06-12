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

/* START_OF_SYMBOL_DEFINITION RemoveTpsFromGtpInformation_Item */
/**
 * @summary RemoveTpsFromGtpInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromGtpInformation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RemoveTpsFromGtpInformation_Item {
    constructor(
        /**
         * @summary `fromGtp`.
         * @public
         * @readonly
         */
        readonly fromGtp: ObjectInstance,
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a RemoveTpsFromGtpInformation_Item
     * @description
     *
     * This takes an `object` and converts it to a `RemoveTpsFromGtpInformation_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveTpsFromGtpInformation_Item`.
     * @returns {RemoveTpsFromGtpInformation_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof RemoveTpsFromGtpInformation_Item]: RemoveTpsFromGtpInformation_Item[_K];
        }
    ): RemoveTpsFromGtpInformation_Item {
        return new RemoveTpsFromGtpInformation_Item(_o.fromGtp, _o.tps);
    }
}
/* END_OF_SYMBOL_DEFINITION RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveTpsFromGtpInformation_Item */
/**
 * @summary The Leading Root Component Types of RemoveTpsFromGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RemoveTpsFromGtpInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('fromGtp', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveTpsFromGtpInformation_Item */
/**
 * @summary The Trailing Root Component Types of RemoveTpsFromGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RemoveTpsFromGtpInformation_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveTpsFromGtpInformation_Item */
/**
 * @summary The Extension Addition Component Types of RemoveTpsFromGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RemoveTpsFromGtpInformation_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromGtpInformation_Item */
let _cached_decoder_for_RemoveTpsFromGtpInformation_Item: $.ASN1Decoder<RemoveTpsFromGtpInformation_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromGtpInformation_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromGtpInformation_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromGtpInformation_Item} The decoded data structure.
 */
export function _decode_RemoveTpsFromGtpInformation_Item(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromGtpInformation_Item) {
        _cached_decoder_for_RemoveTpsFromGtpInformation_Item = function (
            el: _Element
        ): RemoveTpsFromGtpInformation_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RemoveTpsFromGtpInformation-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromGtp';
            sequence[1].name = 'tps';
            let fromGtp!: ObjectInstance;
            let tps!: ObjectInstance[];
            fromGtp = _decode_ObjectInstance(sequence[0]);
            tps = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance)(
                sequence[1]
            );
            return new RemoveTpsFromGtpInformation_Item(fromGtp, tps);
        };
    }
    return _cached_decoder_for_RemoveTpsFromGtpInformation_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromGtpInformation_Item */
let _cached_encoder_for_RemoveTpsFromGtpInformation_Item: $.ASN1Encoder<RemoveTpsFromGtpInformation_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromGtpInformation_Item */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromGtpInformation_Item */
/**
 * @summary Encodes a(n) RemoveTpsFromGtpInformation_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromGtpInformation_Item, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromGtpInformation_Item(
    value: RemoveTpsFromGtpInformation_Item,
    elGetter: $.ASN1Encoder<RemoveTpsFromGtpInformation_Item>
) {
    if (!_cached_encoder_for_RemoveTpsFromGtpInformation_Item) {
        _cached_encoder_for_RemoveTpsFromGtpInformation_Item = function (
            value: RemoveTpsFromGtpInformation_Item,
            elGetter: $.ASN1Encoder<RemoveTpsFromGtpInformation_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.fromGtp,
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
    return _cached_encoder_for_RemoveTpsFromGtpInformation_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromGtpInformation_Item */

/* eslint-enable */
