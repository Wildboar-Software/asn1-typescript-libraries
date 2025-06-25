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
import {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../EDIMSInformationObjects/Heading.ta.mjs';
import {
    Body,
    _decode_Body,
    _encode_Body,
} from '../EDIMSInformationObjects/Body.ta.mjs';
/**
 * @summary EDIM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIM ::= SEQUENCE {heading  Heading,
 *                    body     Body
 * }
 * ```
 *
 * @class
 */
export class EDIM {
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
     * @summary Restructures an object into a EDIM
     * @description
     *
     * This takes an `object` and converts it to a `EDIM`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIM`.
     * @returns {EDIM}
     */
    public static _from_object(_o: { [_K in keyof EDIM]: EDIM[_K] }): EDIM {
        return new EDIM(_o.heading, _o.body);
    }
}

/**
 * @summary The Leading Root Component Types of EDIM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIM: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'heading',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'body',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIM: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIM: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIM: $.ASN1Decoder<EDIM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIM
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIM} The decoded data structure.
 */
export function _decode_EDIM(el: _Element): EDIM {
    if (!_cached_decoder_for_EDIM) {
        _cached_decoder_for_EDIM = function (el: _Element): EDIM {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EDIM contained only ' +
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
            return new EDIM(heading, body);
        };
    }
    return _cached_decoder_for_EDIM(el);
}

let _cached_encoder_for_EDIM: $.ASN1Encoder<EDIM> | null = null;

/**
 * @summary Encodes a(n) EDIM into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIM, encoded as an ASN.1 Element.
 */
export function _encode_EDIM(value: EDIM, elGetter: $.ASN1Encoder<EDIM>): _Element {
    if (!_cached_encoder_for_EDIM) {
        _cached_encoder_for_EDIM = function (
            value: EDIM        ): _Element {
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
    return _cached_encoder_for_EDIM(value, elGetter);
}


/* eslint-enable */
