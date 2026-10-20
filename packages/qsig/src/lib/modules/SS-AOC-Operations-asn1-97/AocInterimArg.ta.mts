/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AocInterimArg_interimCharge, _decode_AocInterimArg_interimCharge, _encode_AocInterimArg_interimCharge } from "../SS-AOC-Operations-asn1-97/AocInterimArg-interimCharge.ta.mjs";
import { AocInterimArg_interimArgExtension, _decode_AocInterimArg_interimArgExtension, _encode_AocInterimArg_interimArgExtension } from "../SS-AOC-Operations-asn1-97/AocInterimArg-interimArgExtension.ta.mjs";

/**
 * @summary AocInterimArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocInterimArg ::= SEQUENCE {
 *     interimCharge CHOICE {
 *         chargeNotAvailable [0] IMPLICIT NULL,
 *         freeOfCharge [1] IMPLICIT NULL,
 *         specificCurrency SEQUENCE {
 *             recordedCurrency [1] IMPLICIT RecordedCurrency,
 *             interimBillingId [2] IMPLICIT InterimBillingId OPTIONAL
 *         }
 *     },
 *     interimArgExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocInterimArg {
    /**
     * @summary `interimCharge`.
     * @public
     * @readonly
     */
    readonly interimCharge: AocInterimArg_interimCharge;
    /**
     * @summary `interimArgExtension`.
     * @public
     * @readonly
     */
    readonly interimArgExtension: OPTIONAL<AocInterimArg_interimArgExtension>;

    constructor (
        interimCharge: AocInterimArg_interimCharge,
        interimArgExtension: OPTIONAL<AocInterimArg_interimArgExtension>
    ) {
        this.interimCharge = interimCharge;
        this.interimArgExtension = interimArgExtension;
    }

    /**
     * @summary Restructures an object into a AocInterimArg
     * @description
     * 
     * This takes an `object` and converts it to a `AocInterimArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocInterimArg`.
     * @returns {AocInterimArg}
     */
    public static _from_object (_o: { [_K in keyof (AocInterimArg)]: (AocInterimArg)[_K] }): AocInterimArg {
        return new AocInterimArg(_o.interimCharge, _o.interimArgExtension);
    }

}

/**
 * @summary The Leading Root Component Types of AocInterimArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocInterimArg: $.ComponentSpec[] = [
    new $.ComponentSpec("interimCharge", false, $.hasAnyTag),
    new $.ComponentSpec("interimArgExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of AocInterimArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocInterimArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocInterimArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocInterimArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocInterimArg: $.ASN1Decoder<AocInterimArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocInterimArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocInterimArg (el: _Element): AocInterimArg {
    if (!_cached_decoder_for_AocInterimArg) { _cached_decoder_for_AocInterimArg = function (el: _Element): AocInterimArg {
    let interimCharge!: AocInterimArg_interimCharge;
    let interimArgExtension: OPTIONAL<AocInterimArg_interimArgExtension>;
    const callbacks: $.DecodingMap = {
        "interimCharge": (_el: _Element): void => { interimCharge = _decode_AocInterimArg_interimCharge(_el); },
        "interimArgExtension": (_el: _Element): void => { interimArgExtension = _decode_AocInterimArg_interimArgExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocInterimArg,
        _extension_additions_list_spec_for_AocInterimArg,
        _root_component_type_list_2_spec_for_AocInterimArg,
        undefined,
    );
    return new AocInterimArg(
        interimCharge,
        interimArgExtension
    );
}; }
    return _cached_decoder_for_AocInterimArg(el);
}

let _cached_encoder_for_AocInterimArg: $.ASN1Encoder<AocInterimArg> | null = null;

/**
 * @summary Encodes a(n) AocInterimArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocInterimArg, encoded as an ASN.1 Element.
 */
export
function _encode_AocInterimArg (value: AocInterimArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocInterimArg) { _cached_encoder_for_AocInterimArg = function (value: AocInterimArg, elGetter: $.ASN1Encoder<AocInterimArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AocInterimArg_interimCharge(value.interimCharge, $.BER));
    if (value.interimArgExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AocInterimArg_interimArgExtension(value.interimArgExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocInterimArg(value, elGetter);
}

/* eslint-enable */
