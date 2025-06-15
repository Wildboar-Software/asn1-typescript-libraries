/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../AVL-management/AVMP-error.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta.mjs";
/**
 * @summary AbortAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortAVL ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   reason       AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class AbortAVL {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AbortAVL
     * @description
     *
     * This takes an `object` and converts it to a `AbortAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbortAVL`.
     * @returns {AbortAVL}
     */
    public static _from_object(
        _o: { [_K in keyof AbortAVL]: AbortAVL[_K] }
    ): AbortAVL {
        return new AbortAVL(
            _o.invokeID,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_AVMP_error;
}

/**
 * @summary The Leading Root Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AbortAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AbortAVL: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AbortAVL: $.ComponentSpec[] = [];

let _cached_decoder_for_AbortAVL: $.ASN1Decoder<AbortAVL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbortAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbortAVL} The decoded data structure.
 */
export function _decode_AbortAVL(el: _Element) {
    if (!_cached_decoder_for_AbortAVL) {
        _cached_decoder_for_AbortAVL = function (el: _Element): AbortAVL {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AbortAVL contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: InvokeID;
            let reason!: AVMP_error;
            invokeID = _decode_InvokeID(sequence[0]);
            reason = _decode_AVMP_error(sequence[1]);
            return new AbortAVL(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AbortAVL(el);
}

let _cached_encoder_for_AbortAVL: $.ASN1Encoder<AbortAVL> | null = null;

/**
 * @summary Encodes a(n) AbortAVL into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbortAVL, encoded as an ASN.1 Element.
 */
export function _encode_AbortAVL(
    value: AbortAVL,
    elGetter: $.ASN1Encoder<AbortAVL>
) {
    if (!_cached_encoder_for_AbortAVL) {
        _cached_encoder_for_AbortAVL = function (
            value: AbortAVL        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.reason,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AbortAVL(value, elGetter);
}


/* eslint-enable */
