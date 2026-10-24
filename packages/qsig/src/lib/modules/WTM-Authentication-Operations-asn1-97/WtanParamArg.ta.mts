/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Authentication-Operations-asn1-97/WtmUserId.ta.mjs";
import { type AuthChallenge, _decode_AuthChallenge, _encode_AuthChallenge } from "../WTM-Authentication-Operations-asn1-97/AuthChallenge.ta.mjs";
import { AuthAlgorithm, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../WTM-Authentication-Operations-asn1-97/AuthAlgorithm.ta.mjs";
import { type CanCompute, _decode_CanCompute, _encode_CanCompute } from "../WTM-Authentication-Operations-asn1-97/CanCompute.ta.mjs";
import { type DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";

/**
 * @summary WtanParamArg
 * @description
 *
 * Argument of `getWtanParam` and of `wtanParamEnq` (ECMA-306 §7.5.1, §7.5.3).
 * Carries the challenge received from the WTM user, and the authentication
 * algorithm.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtanParamArg ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     authChallenge AuthChallenge,
 *     authAlgorithm AuthAlgorithm,
 *     canCompute CanCompute OPTIONAL,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class WtanParamArg {
    /**
     * @summary `wtmUserId`.
     * @description
     *
     * Identity of the WTM user that is authenticating the PISN. An invalid
     * identity is rejected with `invalidServedUserNr` (ECMA-306 §7.5.2.2,
     * §7.5.3.2).
     * @public
     * @readonly
     */
    readonly wtmUserId: WtmUserId;
    /**
     * @summary `authChallenge`.
     * @description
     *
     * Challenge received from the WTM user (ECMA-306 §7.5.1.1). Described as a
     * randomly generated parameter (§6.3.1). Generation is outside ECMA-306
     * (§1).
     * @public
     * @readonly
     */
    readonly authChallenge: AuthChallenge;
    /**
     * @summary `authAlgorithm`.
     * @description
     *
     * Required by the type (ECMA-306 §6.3.1). §7.5.1.1 mentions the challenge
     * received from the WTM user and does not mention this element. Algorithm
     * behaviour is outside ECMA-306 (§1).
     * @public
     * @readonly
     */
    readonly authAlgorithm: AuthAlgorithm;
    /**
     * @summary `canCompute`.
     * @description
     *
     * Present when the Visitor PINX can compute the response from session-key
     * information (ECMA-306 §6.3.1, §7.5.1.1).
     * @public
     * @readonly
     */
    readonly canCompute: OPTIONAL<CanCompute>;
    /**
     * @summary `dummyExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-306 §6.3.1 defines no members of
     * `WTMAuthExtSet`.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        wtmUserId: WtmUserId,
        authChallenge: AuthChallenge,
        authAlgorithm: AuthAlgorithm,
        canCompute?: OPTIONAL<CanCompute>,
        dummyExtension?: OPTIONAL<DummyExtension>
    ) {
        this.wtmUserId = wtmUserId;
        this.authChallenge = authChallenge;
        this.authAlgorithm = authAlgorithm;
        this.canCompute = canCompute;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a WtanParamArg
     * @description
     * 
     * This takes an `object` and converts it to a `WtanParamArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WtanParamArg`.
     * @returns {WtanParamArg}
     */
    public static _from_object (_o: { [_K in keyof (WtanParamArg)]: (WtanParamArg)[_K] }): WtanParamArg {
        return new WtanParamArg(_o.wtmUserId, _o.authChallenge, _o.authAlgorithm, _o.canCompute, _o.dummyExtension);
    }

}

/**
 * @summary The Leading Root Component Types of WtanParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WtanParamArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("authChallenge", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("authAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("canCompute", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of WtanParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WtanParamArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WtanParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WtanParamArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WtanParamArg: $.ASN1Decoder<WtanParamArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtanParamArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtanParamArg (el: _Element): WtanParamArg {
    if (!_cached_decoder_for_WtanParamArg) { _cached_decoder_for_WtanParamArg = function (el: _Element): WtanParamArg {
    let wtmUserId!: WtmUserId;
    let authChallenge!: AuthChallenge;
    let authAlgorithm!: AuthAlgorithm;
    let canCompute: OPTIONAL<CanCompute>;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "authChallenge": (_el: _Element): void => { authChallenge = _decode_AuthChallenge(_el); },
        "authAlgorithm": (_el: _Element): void => { authAlgorithm = _decode_AuthAlgorithm(_el); },
        "canCompute": (_el: _Element): void => { canCompute = _decode_CanCompute(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WtanParamArg,
        _extension_additions_list_spec_for_WtanParamArg,
        _root_component_type_list_2_spec_for_WtanParamArg,
        undefined,
    );
    return new WtanParamArg(
        wtmUserId,
        authChallenge,
        authAlgorithm,
        canCompute,
        dummyExtension
    );
}; }
    return _cached_decoder_for_WtanParamArg(el);
}

let _cached_encoder_for_WtanParamArg: $.ASN1Encoder<WtanParamArg> | null = null;

/**
 * @summary Encodes a(n) WtanParamArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtanParamArg, encoded as an ASN.1 Element.
 */
export
function _encode_WtanParamArg (value: WtanParamArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtanParamArg) { _cached_encoder_for_WtanParamArg = function (value: WtanParamArg, _elGetter: $.ASN1Encoder<WtanParamArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    _components.push(/* REQUIRED   */ _encode_AuthChallenge(value.authChallenge, $.BER));
    _components.push(/* REQUIRED   */ _encode_AuthAlgorithm(value.authAlgorithm, $.BER));
    if (value.canCompute !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CanCompute(value.canCompute, $.BER));
    }
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WtanParamArg(value, elGetter);
}

/* eslint-enable */
