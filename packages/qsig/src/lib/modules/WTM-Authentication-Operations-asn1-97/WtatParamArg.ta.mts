/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Authentication-Operations-asn1-97/WtmUserId.ta.mjs";
import { type CanCompute, _decode_CanCompute, _encode_CanCompute } from "../WTM-Authentication-Operations-asn1-97/CanCompute.ta.mjs";
import { type AuthChallenge, _decode_AuthChallenge, _encode_AuthChallenge } from "../WTM-Authentication-Operations-asn1-97/AuthChallenge.ta.mjs";
import { type DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";

/**
 * @summary WtatParamArg
 * @description
 *
 * Argument of `getWtatParam` and of `wtatParamEnq` (ECMA-306 §6.5.2, §6.5.6,
 * §6.5.7). Unlike SS-CTAT, the Visitor PINX may supply a challenge of its own.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtatParamArg ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     canCompute CanCompute OPTIONAL,
 *     authChallenge AuthChallenge OPTIONAL,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class WtatParamArg {
    /**
     * @summary `wtmUserId`.
     * @description
     *
     * Identity of the WTM user. An invalid identity is rejected with
     * `invalidServedUserNr` (ECMA-306 §6.5.2.2, §6.5.7.2).
     * @public
     * @readonly
     */
    readonly wtmUserId: WtmUserId;
    /**
     * @summary `canCompute`.
     * @description
     *
     * Present when the Visitor PINX can compute a challenge and the expected
     * response from session-key information (ECMA-306 §6.3.1). The Home PINX
     * copies that indication into `wtatParamEnq` (§6.5.3.1).
     * @public
     * @readonly
     */
    readonly canCompute: OPTIONAL<CanCompute>;
    /**
     * @summary `authChallenge`.
     * @description
     *
     * Optional challenge calculated by the Visitor PINX (ECMA-306 §6.5.4.1,
     * §6.5.5.1). The Home PINX forwards it when present (§6.5.3.1). The
     * Authentication Server PINX generates a challenge unless this element is
     * present (§6.5.7.1).
     * @public
     * @readonly
     */
    readonly authChallenge: OPTIONAL<AuthChallenge>;
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
        canCompute?: OPTIONAL<CanCompute>,
        authChallenge?: OPTIONAL<AuthChallenge>,
        dummyExtension?: OPTIONAL<DummyExtension>
    ) {
        this.wtmUserId = wtmUserId;
        this.canCompute = canCompute;
        this.authChallenge = authChallenge;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a WtatParamArg
     * @description
     * 
     * This takes an `object` and converts it to a `WtatParamArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WtatParamArg`.
     * @returns {WtatParamArg}
     */
    public static _from_object (_o: { [_K in keyof (WtatParamArg)]: (WtatParamArg)[_K] }): WtatParamArg {
        return new WtatParamArg(_o.wtmUserId, _o.canCompute, _o.authChallenge, _o.dummyExtension);
    }

}

/**
 * @summary The Leading Root Component Types of WtatParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WtatParamArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("canCompute", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("authChallenge", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of WtatParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WtatParamArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WtatParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WtatParamArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WtatParamArg: $.ASN1Decoder<WtatParamArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtatParamArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtatParamArg (el: _Element): WtatParamArg {
    if (!_cached_decoder_for_WtatParamArg) { _cached_decoder_for_WtatParamArg = function (el: _Element): WtatParamArg {
    let wtmUserId!: WtmUserId;
    let canCompute: OPTIONAL<CanCompute>;
    let authChallenge: OPTIONAL<AuthChallenge>;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "canCompute": (_el: _Element): void => { canCompute = _decode_CanCompute(_el); },
        "authChallenge": (_el: _Element): void => { authChallenge = _decode_AuthChallenge(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WtatParamArg,
        _extension_additions_list_spec_for_WtatParamArg,
        _root_component_type_list_2_spec_for_WtatParamArg,
        undefined,
    );
    return new WtatParamArg(
        wtmUserId,
        canCompute,
        authChallenge,
        dummyExtension
    );
}; }
    return _cached_decoder_for_WtatParamArg(el);
}

let _cached_encoder_for_WtatParamArg: $.ASN1Encoder<WtatParamArg> | null = null;

/**
 * @summary Encodes a(n) WtatParamArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtatParamArg, encoded as an ASN.1 Element.
 */
export
function _encode_WtatParamArg (value: WtatParamArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtatParamArg) { _cached_encoder_for_WtatParamArg = function (value: WtatParamArg, _elGetter: $.ASN1Encoder<WtatParamArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    if (value.canCompute !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CanCompute(value.canCompute, $.BER));
    }
    if (value.authChallenge !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AuthChallenge(value.authChallenge, $.BER));
    }
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WtatParamArg(value, elGetter);
}

/* eslint-enable */
