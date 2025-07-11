/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CASP_error,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../CaSubscription/CASP-error.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CAsubscribeAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAsubscribeAbort ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   reason       CASP-error,
 *   ... }
 * ```
 *
 */
export class CAsubscribeAbort {
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
        readonly reason: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CAsubscribeAbort
     * @description
     *
     * This takes an `object` and converts it to a `CAsubscribeAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAsubscribeAbort`.
     * @returns {CAsubscribeAbort}
     */
    public static _from_object(
        _o: { [_K in keyof CAsubscribeAbort]: CAsubscribeAbort[_K] }
    ): CAsubscribeAbort {
        return new CAsubscribeAbort(
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

    public static _enum_for_reason = _enum_for_CASP_error;
}

/**
 * @summary The Leading Root Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [];

let _cached_decoder_for_CAsubscribeAbort: $.ASN1Decoder<CAsubscribeAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAsubscribeAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CAsubscribeAbort} The decoded data structure.
 */
export function _decode_CAsubscribeAbort(el: _Element): CAsubscribeAbort {
    if (!_cached_decoder_for_CAsubscribeAbort) {
        _cached_decoder_for_CAsubscribeAbort = function (
            el: _Element
        ): CAsubscribeAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CAsubscribeAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: InvokeID;
            let reason!: CASP_error;
            invokeID = _decode_InvokeID(sequence[0]);
            reason = _decode_CASP_error(sequence[1]);
            return new CAsubscribeAbort(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CAsubscribeAbort(el);
}

let _cached_encoder_for_CAsubscribeAbort: $.ASN1Encoder<CAsubscribeAbort> | null = null;

/**
 * @summary Encodes a(n) CAsubscribeAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAsubscribeAbort, encoded as an ASN.1 Element.
 */
export function _encode_CAsubscribeAbort(
    value: CAsubscribeAbort,
    elGetter: $.ASN1Encoder<CAsubscribeAbort>
): _Element {
    if (!_cached_encoder_for_CAsubscribeAbort) {
        _cached_encoder_for_CAsubscribeAbort = function (
            value: CAsubscribeAbort        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CASP_error(
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
    return _cached_encoder_for_CAsubscribeAbort(value, elGetter);
}


/* eslint-enable */
