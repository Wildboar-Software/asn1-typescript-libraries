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
import * as $ from '@wildboar/asn1/functional';
import {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../IPMSInformationObjects/Heading.ta.mjs';
import {
    Body,
    _decode_Body,
    _encode_Body,
} from '../IPMSInformationObjects/Body.ta.mjs';
/**
 * @summary IPM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPM ::= SEQUENCE {heading  Heading,
 *                   body     Body
 * }
 * ```
 *
 * @class
 */
export class IPM {
    constructor(
        /**
         * @summary `heading`.
         * @public
         * @readonly
         */
        readonly heading: Heading,
        /**
         * @summary `body`.
         * @public
         * @readonly
         */
        readonly body: Body
    ) {}

    /**
     * @summary Restructures an object into a IPM
     * @description
     *
     * This takes an `object` and converts it to a `IPM`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPM`.
     * @returns {IPM}
     */
    public static _from_object(_o: { [_K in keyof IPM]: IPM[_K] }): IPM {
        return new IPM(_o.heading, _o.body);
    }
}

/**
 * @summary The Leading Root Component Types of IPM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPM: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'heading',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'body',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of IPM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPM: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IPM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPM: $.ComponentSpec[] = [];

let _cached_decoder_for_IPM: $.ASN1Decoder<IPM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPM
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPM} The decoded data structure.
 */
export function _decode_IPM(el: _Element) {
    if (!_cached_decoder_for_IPM) {
        _cached_decoder_for_IPM = function (el: _Element): IPM {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'IPM contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'heading';
            sequence[1].name = 'body';
            let heading!: Heading;
            let body!: Body;
            heading = _decode_Heading(sequence[0]);
            body = _decode_Body(sequence[1]);
            return new IPM(heading, body);
        };
    }
    return _cached_decoder_for_IPM(el);
}

let _cached_encoder_for_IPM: $.ASN1Encoder<IPM> | null = null;

/**
 * @summary Encodes a(n) IPM into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPM, encoded as an ASN.1 Element.
 */
export function _encode_IPM(value: IPM, elGetter: $.ASN1Encoder<IPM>) {
    if (!_cached_encoder_for_IPM) {
        _cached_encoder_for_IPM = function (
            value: IPM        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Heading(value.heading, $.BER),
                        /* REQUIRED   */ _encode_Body(value.body, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPM(value, elGetter);
}


/* eslint-enable */
