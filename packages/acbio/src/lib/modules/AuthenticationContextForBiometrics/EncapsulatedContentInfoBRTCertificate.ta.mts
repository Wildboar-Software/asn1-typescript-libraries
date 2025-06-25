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
 * @summary EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncapsulatedContentInfoBRTCertificate ::= SEQUENCE {
 *     eContentType    CONTENT-TYPE.&id({ContentTypeBRTCertificateContentInfo}),
 *     eContent        [0] CONTENT-TYPE.&Type({ContentTypeBRTCertificateContentInfo}{@eContentType})}
 * ```
 *
 * @class
 */
export class EncapsulatedContentInfoBRTCertificate {
    constructor(
        /**
         * @summary `eContentType`.
         * @public
         * @readonly
         */
        readonly eContentType: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `eContent`.
         * @public
         * @readonly
         */
        readonly eContent: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
    ) {}

    /**
     * @summary Restructures an object into a EncapsulatedContentInfoBRTCertificate
     * @description
     *
     * This takes an `object` and converts it to a `EncapsulatedContentInfoBRTCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfoBRTCertificate`.
     * @returns {EncapsulatedContentInfoBRTCertificate}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncapsulatedContentInfoBRTCertificate]: EncapsulatedContentInfoBRTCertificate[_K];
        }
    ): EncapsulatedContentInfoBRTCertificate {
        return new EncapsulatedContentInfoBRTCertificate(
            _o.eContentType,
            _o.eContent
        );
    }
}


/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfoBRTCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'eContentType',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'eContent',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfoBRTCertificate: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfoBRTCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncapsulatedContentInfoBRTCertificate: $.ComponentSpec[] = [];


let _cached_decoder_for_EncapsulatedContentInfoBRTCertificate: $.ASN1Decoder<EncapsulatedContentInfoBRTCertificate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfoBRTCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncapsulatedContentInfoBRTCertificate} The decoded data structure.
 */
export function _decode_EncapsulatedContentInfoBRTCertificate(el: _Element): EncapsulatedContentInfoBRTCertificate {
    if (!_cached_decoder_for_EncapsulatedContentInfoBRTCertificate) {
        _cached_decoder_for_EncapsulatedContentInfoBRTCertificate = function (
            el: _Element
        ): EncapsulatedContentInfoBRTCertificate {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncapsulatedContentInfoBRTCertificate contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'eContentType';
            sequence[1].name = 'eContent';
            let eContentType!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            let eContent!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            eContentType = $._decodeAny(
                /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ sequence[0]
            );
            eContent = $._decode_implicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(
                () => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
            )(sequence[1]);
            return new EncapsulatedContentInfoBRTCertificate(
                eContentType,
                eContent
            );
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfoBRTCertificate(el);
}


let _cached_encoder_for_EncapsulatedContentInfoBRTCertificate: $.ASN1Encoder<EncapsulatedContentInfoBRTCertificate> | null = null;


/**
 * @summary Encodes a(n) EncapsulatedContentInfoBRTCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfoBRTCertificate, encoded as an ASN.1 Element.
 */
export function _encode_EncapsulatedContentInfoBRTCertificate(
    value: EncapsulatedContentInfoBRTCertificate,
    elGetter: $.ASN1Encoder<EncapsulatedContentInfoBRTCertificate>
): _Element {
    if (!_cached_encoder_for_EncapsulatedContentInfoBRTCertificate) {
        _cached_encoder_for_EncapsulatedContentInfoBRTCertificate = function (
            value: EncapsulatedContentInfoBRTCertificate        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.eContentType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
                            $.BER
                        )(value.eContent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfoBRTCertificate(
        value,
        elGetter
    );
}


/* eslint-enable */
