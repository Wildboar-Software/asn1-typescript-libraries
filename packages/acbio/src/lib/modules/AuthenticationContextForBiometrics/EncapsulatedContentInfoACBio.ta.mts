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
 * @summary EncapsulatedContentInfoACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncapsulatedContentInfoACBio ::= SEQUENCE {
 *     eContentType        CONTENT-TYPE.&id({ContentTypeACBioContentInfo}),
 *     eContent            [0] EXPLICIT CONTENT-TYPE.&Type({ContentTypeACBioContentInfo}{@eContentType}) }
 * ```
 *
 */
export class EncapsulatedContentInfoACBio {
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
     * @summary Restructures an object into a EncapsulatedContentInfoACBio
     * @description
     *
     * This takes an `object` and converts it to a `EncapsulatedContentInfoACBio`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfoACBio`.
     * @returns {EncapsulatedContentInfoACBio}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncapsulatedContentInfoACBio]: EncapsulatedContentInfoACBio[_K];
        }
    ): EncapsulatedContentInfoACBio {
        return new EncapsulatedContentInfoACBio(_o.eContentType, _o.eContent);
    }
}


/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfoACBio
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfoACBio: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of EncapsulatedContentInfoACBio
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfoACBio: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfoACBio
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncapsulatedContentInfoACBio: $.ComponentSpec[] = [];


let _cached_decoder_for_EncapsulatedContentInfoACBio: $.ASN1Decoder<EncapsulatedContentInfoACBio> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfoACBio
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncapsulatedContentInfoACBio} The decoded data structure.
 */
export function _decode_EncapsulatedContentInfoACBio(el: _Element): EncapsulatedContentInfoACBio {
    if (!_cached_decoder_for_EncapsulatedContentInfoACBio) {
        _cached_decoder_for_EncapsulatedContentInfoACBio = function (
            el: _Element
        ): EncapsulatedContentInfoACBio {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncapsulatedContentInfoACBio contained only ' +
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
            eContent = $._decode_explicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(
                () => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
            )(sequence[1]);
            return new EncapsulatedContentInfoACBio(eContentType, eContent);
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfoACBio(el);
}


let _cached_encoder_for_EncapsulatedContentInfoACBio: $.ASN1Encoder<EncapsulatedContentInfoACBio> | null = null;


/**
 * @summary Encodes a(n) EncapsulatedContentInfoACBio into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfoACBio, encoded as an ASN.1 Element.
 */
export function _encode_EncapsulatedContentInfoACBio(
    value: EncapsulatedContentInfoACBio,
    elGetter: $.ASN1Encoder<EncapsulatedContentInfoACBio>
): _Element {
    if (!_cached_encoder_for_EncapsulatedContentInfoACBio) {
        _cached_encoder_for_EncapsulatedContentInfoACBio = function (
            value: EncapsulatedContentInfoACBio        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.eContentType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
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
    return _cached_encoder_for_EncapsulatedContentInfoACBio(value, elGetter);
}


/* eslint-enable */
