/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IrisScan_eye,
    _decode_IrisScan_eye,
    _encode_IrisScan_eye,
    _enum_for_IrisScan_eye,
} from "../PKCS-15/IrisScan-eye.ta.mjs";

/**
 * @summary IrisScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan ::= SEQUENCE {
 *     eye ENUMERATED {left, right},
 *     ...
 * }
 * ```
 *
 */
export class IrisScan {
    constructor(
        /**
         * @summary `eye`.
         * @public
         * @readonly
         */
        readonly eye: IrisScan_eye,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IrisScan
     * @description
     *
     * This takes an `object` and converts it to a `IrisScan`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IrisScan`.
     * @returns {IrisScan}
     */
    public static _from_object(
        _o: { [_K in keyof IrisScan]: IrisScan[_K] }
    ): IrisScan {
        return new IrisScan(_o.eye, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `eye`
     * @public
     * @static
     */

    public static _enum_for_eye = _enum_for_IrisScan_eye;
}


/**
 * @summary The Leading Root Component Types of IrisScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IrisScan: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "eye",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];


/**
 * @summary The Trailing Root Component Types of IrisScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IrisScan: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IrisScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IrisScan: $.ComponentSpec[] = [];


let _cached_decoder_for_IrisScan: $.ASN1Decoder<IrisScan> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IrisScan
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IrisScan} The decoded data structure.
 */
export function _decode_IrisScan(el: _Element): IrisScan {
    if (!_cached_decoder_for_IrisScan) {
        _cached_decoder_for_IrisScan = function (el: _Element): IrisScan {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "IrisScan contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "eye";
            let eye!: IrisScan_eye;
            eye = _decode_IrisScan_eye(sequence[0]);
            return new IrisScan(eye, sequence.slice(1));
        };
    }
    return _cached_decoder_for_IrisScan(el);
}


let _cached_encoder_for_IrisScan: $.ASN1Encoder<IrisScan> | null = null;


/**
 * @summary Encodes a(n) IrisScan into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IrisScan, encoded as an ASN.1 Element.
 */
export function _encode_IrisScan(
    value: IrisScan,
    elGetter: $.ASN1Encoder<IrisScan>
): _Element {
    if (!_cached_encoder_for_IrisScan) {
        _cached_encoder_for_IrisScan = function (
            value: IrisScan        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_IrisScan_eye(
                                value.eye,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IrisScan(value, elGetter);
}


/* eslint-enable */
