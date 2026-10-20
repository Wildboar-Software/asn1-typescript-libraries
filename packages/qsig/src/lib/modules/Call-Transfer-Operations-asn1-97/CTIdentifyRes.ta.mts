/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Call-Transfer-Operations-asn1-97/CallIdentity.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { CTIdentifyRes_resultExtension, _decode_CTIdentifyRes_resultExtension, _encode_CTIdentifyRes_resultExtension } from "../Call-Transfer-Operations-asn1-97/CTIdentifyRes-resultExtension.ta.mjs";

/**
 * @summary CTIdentifyRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTIdentifyRes ::= SEQUENCE {
 *     callIdentity CallIdentity,
 *     rerouteingNumber PartyNumber,
 *     resultExtension CHOICE {
 *         single [6] IMPLICIT Extension {{CTExtSet}},
 *         multiple [7] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CTIdentifyRes {
    /**
     * @summary `callIdentity`.
     * @public
     * @readonly
     */
    readonly callIdentity: CallIdentity;
    /**
     * @summary `rerouteingNumber`.
     * @public
     * @readonly
     */
    readonly rerouteingNumber: PartyNumber;
    /**
     * @summary `resultExtension`.
     * @public
     * @readonly
     */
    readonly resultExtension: OPTIONAL<CTIdentifyRes_resultExtension>;

    constructor (
        callIdentity: CallIdentity,
        rerouteingNumber: PartyNumber,
        resultExtension: OPTIONAL<CTIdentifyRes_resultExtension>
    ) {
        this.callIdentity = callIdentity;
        this.rerouteingNumber = rerouteingNumber;
        this.resultExtension = resultExtension;
    }

    /**
     * @summary Restructures an object into a CTIdentifyRes
     * @description
     * 
     * This takes an `object` and converts it to a `CTIdentifyRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTIdentifyRes`.
     * @returns {CTIdentifyRes}
     */
    public static _from_object (_o: { [_K in keyof (CTIdentifyRes)]: (CTIdentifyRes)[_K] }): CTIdentifyRes {
        return new CTIdentifyRes(_o.callIdentity, _o.rerouteingNumber, _o.resultExtension);
    }

}

/**
 * @summary The Leading Root Component Types of CTIdentifyRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTIdentifyRes: $.ComponentSpec[] = [
    new $.ComponentSpec("callIdentity", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("rerouteingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("resultExtension", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of CTIdentifyRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTIdentifyRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTIdentifyRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTIdentifyRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTIdentifyRes: $.ASN1Decoder<CTIdentifyRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTIdentifyRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTIdentifyRes (el: _Element): CTIdentifyRes {
    if (!_cached_decoder_for_CTIdentifyRes) { _cached_decoder_for_CTIdentifyRes = function (el: _Element): CTIdentifyRes {
    let callIdentity!: CallIdentity;
    let rerouteingNumber!: PartyNumber;
    let resultExtension: OPTIONAL<CTIdentifyRes_resultExtension>;
    const callbacks: $.DecodingMap = {
        "callIdentity": (_el: _Element): void => { callIdentity = _decode_CallIdentity(_el); },
        "rerouteingNumber": (_el: _Element): void => { rerouteingNumber = _decode_PartyNumber(_el); },
        "resultExtension": (_el: _Element): void => { resultExtension = _decode_CTIdentifyRes_resultExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTIdentifyRes,
        _extension_additions_list_spec_for_CTIdentifyRes,
        _root_component_type_list_2_spec_for_CTIdentifyRes,
        undefined,
    );
    return new CTIdentifyRes(
        callIdentity,
        rerouteingNumber,
        resultExtension
    );
}; }
    return _cached_decoder_for_CTIdentifyRes(el);
}

let _cached_encoder_for_CTIdentifyRes: $.ASN1Encoder<CTIdentifyRes> | null = null;

/**
 * @summary Encodes a(n) CTIdentifyRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTIdentifyRes, encoded as an ASN.1 Element.
 */
export
function _encode_CTIdentifyRes (value: CTIdentifyRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTIdentifyRes) { _cached_encoder_for_CTIdentifyRes = function (value: CTIdentifyRes, elGetter: $.ASN1Encoder<CTIdentifyRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.callIdentity, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.rerouteingNumber, $.BER));
    if (value.resultExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CTIdentifyRes_resultExtension(value.resultExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTIdentifyRes(value, elGetter);
}

/* eslint-enable */
