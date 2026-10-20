/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { SSCTDigitInfoArg_argumentExtension, _decode_SSCTDigitInfoArg_argumentExtension, _encode_SSCTDigitInfoArg_argumentExtension } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTDigitInfoArg-argumentExtension.ta.mjs";

/**
 * @summary SSCTDigitInfoArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCTDigitInfoArg ::= SEQUENCE {
 *     reroutingNumber [1] PartyNumber OPTIONAL,
 *     -- remaining digits of the Transferred-To Number
 *     sendingComplete [2] IMPLICIT NULL OPTIONAL,
 *     argumentExtension CHOICE {
 *         single [3] IMPLICIT Extension {{SSCTExtSet}},
 *         multiple [4] IMPLICIT SEQUENCE OF Extension {{SSCTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SSCTDigitInfoArg {
    /**
     * @summary `reroutingNumber`.
     * @public
     * @readonly
     */
    readonly reroutingNumber: OPTIONAL<PartyNumber>;
    /**
     * @summary `sendingComplete`.
     * @public
     * @readonly
     */
    readonly sendingComplete: OPTIONAL<NULL>;
    /**
     * @summary `argumentExtension`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<SSCTDigitInfoArg_argumentExtension>;

    constructor (
        reroutingNumber: OPTIONAL<PartyNumber>,
        sendingComplete: OPTIONAL<NULL>,
        argumentExtension: OPTIONAL<SSCTDigitInfoArg_argumentExtension>
    ) {
        this.reroutingNumber = reroutingNumber;
        this.sendingComplete = sendingComplete;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a SSCTDigitInfoArg
     * @description
     * 
     * This takes an `object` and converts it to a `SSCTDigitInfoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SSCTDigitInfoArg`.
     * @returns {SSCTDigitInfoArg}
     */
    public static _from_object (_o: { [_K in keyof (SSCTDigitInfoArg)]: (SSCTDigitInfoArg)[_K] }): SSCTDigitInfoArg {
        return new SSCTDigitInfoArg(_o.reroutingNumber, _o.sendingComplete, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of SSCTDigitInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SSCTDigitInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("reroutingNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sendingComplete", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of SSCTDigitInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SSCTDigitInfoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SSCTDigitInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SSCTDigitInfoArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SSCTDigitInfoArg: $.ASN1Decoder<SSCTDigitInfoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSCTDigitInfoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSCTDigitInfoArg (el: _Element): SSCTDigitInfoArg {
    if (!_cached_decoder_for_SSCTDigitInfoArg) { _cached_decoder_for_SSCTDigitInfoArg = function (el: _Element): SSCTDigitInfoArg {
    let reroutingNumber: OPTIONAL<PartyNumber>;
    let sendingComplete: OPTIONAL<NULL>;
    let argumentExtension: OPTIONAL<SSCTDigitInfoArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "reroutingNumber": (_el: _Element): void => { reroutingNumber = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "sendingComplete": (_el: _Element): void => { sendingComplete = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_SSCTDigitInfoArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SSCTDigitInfoArg,
        _extension_additions_list_spec_for_SSCTDigitInfoArg,
        _root_component_type_list_2_spec_for_SSCTDigitInfoArg,
        undefined,
    );
    return new SSCTDigitInfoArg(
        reroutingNumber,
        sendingComplete,
        argumentExtension
    );
}; }
    return _cached_decoder_for_SSCTDigitInfoArg(el);
}

let _cached_encoder_for_SSCTDigitInfoArg: $.ASN1Encoder<SSCTDigitInfoArg> | null = null;

/**
 * @summary Encodes a(n) SSCTDigitInfoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSCTDigitInfoArg, encoded as an ASN.1 Element.
 */
export
function _encode_SSCTDigitInfoArg (value: SSCTDigitInfoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSCTDigitInfoArg) { _cached_encoder_for_SSCTDigitInfoArg = function (value: SSCTDigitInfoArg, elGetter: $.ASN1Encoder<SSCTDigitInfoArg>): _Element {
    const _components: _Element[] = [];
    if (value.reroutingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PartyNumber, $.BER)(value.reroutingNumber, $.BER));
    }
    if (value.sendingComplete !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.sendingComplete, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SSCTDigitInfoArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SSCTDigitInfoArg(value, elGetter);
}

/* eslint-enable */
