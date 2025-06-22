/* eslint-disable */
import {
    INTEGER,
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
import {
    PDUHeader,
    _decode_PDUHeader,
    _encode_PDUHeader,
} from '../NLM/PDUHeader.ta.mjs';

/**
 * @summary PDUOtherErrorSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUOtherErrorSyntax ::= SEQUENCE {
 *   errorCode  [1]  INTEGER(0..255),
 *   header     [2]  PDUHeader
 * }
 * ```
 *
 * @class
 */
export class PDUOtherErrorSyntax {
    constructor(
        /**
         * @summary `errorCode`.
         * @public
         * @readonly
         */
        readonly errorCode: INTEGER,
        /**
         * @summary `header`.
         * @public
         * @readonly
         */
        readonly header: PDUHeader
    ) {}

    /**
     * @summary Restructures an object into a PDUOtherErrorSyntax
     * @description
     *
     * This takes an `object` and converts it to a `PDUOtherErrorSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUOtherErrorSyntax`.
     * @returns {PDUOtherErrorSyntax}
     */
    public static _from_object(
        _o: { [_K in keyof PDUOtherErrorSyntax]: PDUOtherErrorSyntax[_K] }
    ): PDUOtherErrorSyntax {
        return new PDUOtherErrorSyntax(_o.errorCode, _o.header);
    }
}


/**
 * @summary The Leading Root Component Types of PDUOtherErrorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDUOtherErrorSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'errorCode',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'header',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of PDUOtherErrorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDUOtherErrorSyntax: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PDUOtherErrorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDUOtherErrorSyntax: $.ComponentSpec[] = [];


let _cached_decoder_for_PDUOtherErrorSyntax: $.ASN1Decoder<PDUOtherErrorSyntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PDUOtherErrorSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUOtherErrorSyntax} The decoded data structure.
 */
export function _decode_PDUOtherErrorSyntax(el: _Element) {
    if (!_cached_decoder_for_PDUOtherErrorSyntax) {
        _cached_decoder_for_PDUOtherErrorSyntax = function (
            el: _Element
        ): PDUOtherErrorSyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PDUOtherErrorSyntax contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'errorCode';
            sequence[1].name = 'header';
            let errorCode!: INTEGER;
            let header!: PDUHeader;
            errorCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[0]
            );
            header = $._decode_implicit<PDUHeader>(() => _decode_PDUHeader)(
                sequence[1]
            );
            return new PDUOtherErrorSyntax(errorCode, header);
        };
    }
    return _cached_decoder_for_PDUOtherErrorSyntax(el);
}


let _cached_encoder_for_PDUOtherErrorSyntax: $.ASN1Encoder<PDUOtherErrorSyntax> | null = null;


/**
 * @summary Encodes a(n) PDUOtherErrorSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUOtherErrorSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PDUOtherErrorSyntax(
    value: PDUOtherErrorSyntax,
    elGetter: $.ASN1Encoder<PDUOtherErrorSyntax>
) {
    if (!_cached_encoder_for_PDUOtherErrorSyntax) {
        _cached_encoder_for_PDUOtherErrorSyntax = function (
            value: PDUOtherErrorSyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.errorCode, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_PDUHeader,
                            $.BER
                        )(value.header, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PDUOtherErrorSyntax(value, elGetter);
}


/* eslint-enable */
