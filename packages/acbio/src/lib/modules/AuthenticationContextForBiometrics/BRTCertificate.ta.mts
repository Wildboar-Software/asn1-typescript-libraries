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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary BRTCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCertificate ::= SEQUENCE {
 *     contentType     CONTENT-TYPE.&id({ContentTypeBRTCertificate}),
 *     content         [0] CONTENT-TYPE.&Type({ContentTypeBRTCertificate}{@contentType}) }
 * ```
 *
 * @class
 */
export class BRTCertificate {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
    ) {}

    /**
     * @summary Restructures an object into a BRTCertificate
     * @description
     *
     * This takes an `object` and converts it to a `BRTCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BRTCertificate`.
     * @returns {BRTCertificate}
     */
    public static _from_object(
        _o: { [_K in keyof BRTCertificate]: BRTCertificate[_K] }
    ): BRTCertificate {
        return new BRTCertificate(_o.contentType, _o.content);
    }
}


/**
 * @summary The Leading Root Component Types of BRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BRTCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'contentType',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of BRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BRTCertificate: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BRTCertificate: $.ComponentSpec[] = [];


let _cached_decoder_for_BRTCertificate: $.ASN1Decoder<BRTCertificate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BRTCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCertificate} The decoded data structure.
 */
export function _decode_BRTCertificate(el: _Element): BRTCertificate {
    if (!_cached_decoder_for_BRTCertificate) {
        _cached_decoder_for_BRTCertificate = function (
            el: _Element
        ): BRTCertificate {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BRTCertificate contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'contentType';
            sequence[1].name = 'content';
            let contentType!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            let content!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            contentType = $._decodeAny(
                /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ sequence[0]
            );
            content = $._decode_implicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(
                () => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
            )(sequence[1]);
            return new BRTCertificate(contentType, content);
        };
    }
    return _cached_decoder_for_BRTCertificate(el);
}


let _cached_encoder_for_BRTCertificate: $.ASN1Encoder<BRTCertificate> | null = null;


/**
 * @summary Encodes a(n) BRTCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCertificate, encoded as an ASN.1 Element.
 */
export function _encode_BRTCertificate(
    value: BRTCertificate,
    elGetter: $.ASN1Encoder<BRTCertificate>
): _Element {
    if (!_cached_encoder_for_BRTCertificate) {
        _cached_encoder_for_BRTCertificate = function (
            value: BRTCertificate        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.contentType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BRTCertificate(value, elGetter);
}


/* eslint-enable */
