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
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta.mjs';

/**
 * @summary ExplicitPtoP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExplicitPtoP ::= SEQUENCE {fromTp  ExplicitTP,
 *                            toTp    ExplicitTP
 * }
 * ```
 *
 * @class
 */
export class ExplicitPtoP {
    constructor(
        /**
         * @summary `fromTp`.
         * @public
         * @readonly
         */
        readonly fromTp: ExplicitTP,
        /**
         * @summary `toTp`.
         * @public
         * @readonly
         */
        readonly toTp: ExplicitTP
    ) {}

    /**
     * @summary Restructures an object into a ExplicitPtoP
     * @description
     *
     * This takes an `object` and converts it to a `ExplicitPtoP`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExplicitPtoP`.
     * @returns {ExplicitPtoP}
     */
    public static _from_object(
        _o: { [_K in keyof ExplicitPtoP]: ExplicitPtoP[_K] }
    ): ExplicitPtoP {
        return new ExplicitPtoP(_o.fromTp, _o.toTp);
    }
}


/**
 * @summary The Leading Root Component Types of ExplicitPtoP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExplicitPtoP: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTp', false, $.hasAnyTag),
    new $.ComponentSpec('toTp', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ExplicitPtoP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExplicitPtoP: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ExplicitPtoP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExplicitPtoP: $.ComponentSpec[] = [];


let _cached_decoder_for_ExplicitPtoP: $.ASN1Decoder<ExplicitPtoP> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExplicitPtoP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExplicitPtoP} The decoded data structure.
 */
export function _decode_ExplicitPtoP(el: _Element): ExplicitPtoP {
    if (!_cached_decoder_for_ExplicitPtoP) {
        _cached_decoder_for_ExplicitPtoP = function (
            el: _Element
        ): ExplicitPtoP {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ExplicitPtoP contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTp';
            sequence[1].name = 'toTp';
            let fromTp!: ExplicitTP;
            let toTp!: ExplicitTP;
            fromTp = _decode_ExplicitTP(sequence[0]);
            toTp = _decode_ExplicitTP(sequence[1]);
            return new ExplicitPtoP(fromTp, toTp);
        };
    }
    return _cached_decoder_for_ExplicitPtoP(el);
}


let _cached_encoder_for_ExplicitPtoP: $.ASN1Encoder<ExplicitPtoP> | null = null;


/**
 * @summary Encodes a(n) ExplicitPtoP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExplicitPtoP, encoded as an ASN.1 Element.
 */
export function _encode_ExplicitPtoP(
    value: ExplicitPtoP,
    elGetter: $.ASN1Encoder<ExplicitPtoP>
): _Element {
    if (!_cached_encoder_for_ExplicitPtoP) {
        _cached_encoder_for_ExplicitPtoP = function (
            value: ExplicitPtoP        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExplicitTP(
                            value.fromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ExplicitTP(value.toTp, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExplicitPtoP(value, elGetter);
}


/* eslint-enable */
