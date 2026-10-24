/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { AuthChallenge, _decode_AuthChallenge, _encode_AuthChallenge } from "../CT-Authentication-Operations/AuthChallenge.ta.mjs";
// export { AuthChallenge, _decode_AuthChallenge, _encode_AuthChallenge } from "../CT-Authentication-Operations/AuthChallenge.ta.mjs";
import { AuthAlgorithm, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../CT-Authentication-Operations/AuthAlgorithm.ta.mjs";
// export { AuthAlgorithm, AuthAlgorithm_ct2 /* IMPORTED_LONG_NAMED_INTEGER */, ct2 /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_dect /* IMPORTED_LONG_NAMED_INTEGER */, dect /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_gsm /* IMPORTED_LONG_NAMED_INTEGER */, gsm /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_us_ct2 /* IMPORTED_LONG_NAMED_INTEGER */, us_ct2 /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_us_dect /* IMPORTED_LONG_NAMED_INTEGER */, us_dect /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_us_gsm /* IMPORTED_LONG_NAMED_INTEGER */, us_gsm /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../CT-Authentication-Operations/AuthAlgorithm.ta.mjs";
import { CanCompute, _decode_CanCompute, _encode_CanCompute } from "../CT-Authentication-Operations/CanCompute.ta.mjs";
// export { CanCompute, _decode_CanCompute, _encode_CanCompute } from "../CT-Authentication-Operations/CanCompute.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";


/**
 * @summary CtanParamArg
 * @description
 *
 * Argument of `getCtanParam` and of `ctanParamEnq` (ECMA-243 §7.5.1, §7.5.3).
 * Carries the challenge and algorithm received from the CTM user.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtanParamArg ::= SEQUENCE {
 *     pisnNumber PartyNumber,
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
class CtanParamArg {
    /**
     * @summary `pisnNumber`.
     * @description
     *
     * PISN number of the CTM user that is authenticating the PISN. An invalid
     * number is rejected with `invalidServedUserNr` (ECMA-243 §7.5.2.2,
     * §7.5.3.2).
     * @public
     * @readonly
     */
    readonly pisnNumber: PartyNumber;
    /**
     * @summary `authChallenge`.
     * @description
     *
     * Challenge received from the CTM user (ECMA-243 §7.5.1.1). Described as a
     * randomly generated parameter (§6.3.1). Generation is outside ECMA-243
     * (§1).
     * @public
     * @readonly
     */
    readonly authChallenge: AuthChallenge;
    /**
     * @summary `authAlgorithm`.
     * @description
     *
     * Algorithm identifier received from the CTM user (ECMA-243 §6.3.1,
     * §7.5.1.1). Algorithm behaviour is outside ECMA-243 (§1).
     * @public
     * @readonly
     */
    readonly authAlgorithm: AuthAlgorithm;
    /**
     * @summary `canCompute`.
     * @description
     *
     * Present when the Visitor PINX can compute the response from session-key
     * information (ECMA-243 §6.3.1, §7.5.1.1).
     * @public
     * @readonly
     */
    readonly canCompute: OPTIONAL<CanCompute>;
    /**
     * @summary `dummyExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-243 §6.3.1 defines none.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        pisnNumber: PartyNumber,
        authChallenge: AuthChallenge,
        authAlgorithm: AuthAlgorithm,
        canCompute?: OPTIONAL<CanCompute>,
        dummyExtension?: OPTIONAL<DummyExtension>
    ) {
        this.pisnNumber = pisnNumber;
        this.authChallenge = authChallenge;
        this.authAlgorithm = authAlgorithm;
        this.canCompute = canCompute;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a CtanParamArg
     * @description
     * 
     * This takes an `object` and converts it to a `CtanParamArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtanParamArg`.
     * @returns {CtanParamArg}
     */
    public static _from_object (_o: { [_K in keyof (CtanParamArg)]: (CtanParamArg)[_K] }): CtanParamArg {
        return new CtanParamArg(_o.pisnNumber, _o.authChallenge, _o.authAlgorithm, _o.canCompute, _o.dummyExtension);
    }


}

/**
 * @summary The Leading Root Component Types of CtanParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtanParamArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pisnNumber", false, $.hasAnyTag),
    new $.ComponentSpec("authChallenge", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("authAlgorithm", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("canCompute", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of CtanParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtanParamArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtanParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtanParamArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtanParamArg: $.ASN1Decoder<CtanParamArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtanParamArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtanParamArg (el: _Element): CtanParamArg {
    if (!_cached_decoder_for_CtanParamArg) { _cached_decoder_for_CtanParamArg = function (el: _Element): CtanParamArg {
    let pisnNumber!: PartyNumber;
    let authChallenge!: AuthChallenge;
    let authAlgorithm!: AuthAlgorithm;
    let canCompute: OPTIONAL<CanCompute>;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "pisnNumber": (_el: _Element): void => { pisnNumber = _decode_PartyNumber(_el); },
        "authChallenge": (_el: _Element): void => { authChallenge = _decode_AuthChallenge(_el); },
        "authAlgorithm": (_el: _Element): void => { authAlgorithm = _decode_AuthAlgorithm(_el); },
        "canCompute": (_el: _Element): void => { canCompute = _decode_CanCompute(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CtanParamArg,
        _extension_additions_list_spec_for_CtanParamArg,
        _root_component_type_list_2_spec_for_CtanParamArg,
        undefined,
    );
    return new CtanParamArg(
        pisnNumber,
        authChallenge,
        authAlgorithm,
        canCompute,
        dummyExtension
    );
}; }
    return _cached_decoder_for_CtanParamArg(el);
}

let _cached_encoder_for_CtanParamArg: $.ASN1Encoder<CtanParamArg> | null = null;

/**
 * @summary Encodes a(n) CtanParamArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtanParamArg, encoded as an ASN.1 Element.
 */
export
function _encode_CtanParamArg (value: CtanParamArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtanParamArg) { _cached_encoder_for_CtanParamArg = function (value: CtanParamArg): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.pisnNumber, $.BER));
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
    return _cached_encoder_for_CtanParamArg(value, elGetter);
}


/* eslint-enable */
