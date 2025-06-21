/* eslint-disable */
import {
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

/**
 * @summary ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertPtoPToMulticastReply-Item-success ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ConvertPtoPToMulticastReply_Item_success {
    constructor(
        /**
         * @summary `mpXC`.
         * @public
         * @readonly
         */
        readonly mpXC: ObjectInstance,
        /**
         * @summary `xC`.
         * @public
         * @readonly
         */
        readonly xC: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a ConvertPtoPToMulticastReply_Item_success
     * @description
     *
     * This takes an `object` and converts it to a `ConvertPtoPToMulticastReply_Item_success`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConvertPtoPToMulticastReply_Item_success`.
     * @returns {ConvertPtoPToMulticastReply_Item_success}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConvertPtoPToMulticastReply_Item_success]: ConvertPtoPToMulticastReply_Item_success[_K];
        }
    ): ConvertPtoPToMulticastReply_Item_success {
        return new ConvertPtoPToMulticastReply_Item_success(_o.mpXC, _o.xC);
    }
}


/**
 * @summary The Leading Root Component Types of ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConvertPtoPToMulticastReply_Item_success: $.ComponentSpec[] = [
    new $.ComponentSpec('mpXC', false, $.hasAnyTag),
    new $.ComponentSpec('xC', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConvertPtoPToMulticastReply_Item_success: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConvertPtoPToMulticastReply_Item_success: $.ComponentSpec[] = [];


let _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success: $.ASN1Decoder<ConvertPtoPToMulticastReply_Item_success> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConvertPtoPToMulticastReply_Item_success
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertPtoPToMulticastReply_Item_success} The decoded data structure.
 */
export function _decode_ConvertPtoPToMulticastReply_Item_success(el: _Element) {
    if (!_cached_decoder_for_ConvertPtoPToMulticastReply_Item_success) {
        _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success = function (
            el: _Element
        ): ConvertPtoPToMulticastReply_Item_success {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConvertPtoPToMulticastReply-Item-success contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mpXC';
            sequence[1].name = 'xC';
            let mpXC!: ObjectInstance;
            let xC!: ObjectInstance;
            mpXC = _decode_ObjectInstance(sequence[0]);
            xC = _decode_ObjectInstance(sequence[1]);
            return new ConvertPtoPToMulticastReply_Item_success(mpXC, xC);
        };
    }
    return _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success(el);
}


let _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item_success> | null = null;


/**
 * @summary Encodes a(n) ConvertPtoPToMulticastReply_Item_success into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertPtoPToMulticastReply_Item_success, encoded as an ASN.1 Element.
 */
export function _encode_ConvertPtoPToMulticastReply_Item_success(
    value: ConvertPtoPToMulticastReply_Item_success,
    elGetter: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item_success>
) {
    if (!_cached_encoder_for_ConvertPtoPToMulticastReply_Item_success) {
        _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success = function (
            value: ConvertPtoPToMulticastReply_Item_success        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpXC,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xC,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success(
        value,
        elGetter
    );
}


/* eslint-enable */
