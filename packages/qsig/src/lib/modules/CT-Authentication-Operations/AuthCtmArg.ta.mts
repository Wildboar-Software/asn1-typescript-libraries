/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { CalcCtatInfo, _decode_CalcCtatInfo, _encode_CalcCtatInfo } from "../CT-Authentication-Operations/CalcCtatInfo.ta.mjs";
// export { CalcCtatInfo, _decode_CalcCtatInfo, _encode_CalcCtatInfo } from "../CT-Authentication-Operations/CalcCtatInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";


/**
 * @summary AuthCtmArg
 * @description
 *
 * Argument of `authCtmUser` (ECMA-243 §6.5.1). Identifies the CTM user and,
 * when the Home PINX has them, supplies the challenge and expected-response
 * values the Visitor PINX is to use.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCtmArg ::= SEQUENCE {
 *     pisnNumber PartyNumber,
 *     calcCtatInfo [1] IMPLICIT CalcCtatInfo OPTIONAL,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AuthCtmArg {
    /**
     * @summary `pisnNumber`.
     * @description
     *
     * PISN number of the CTM user to authenticate (ECMA-243 §6.3.1).
     * @public
     * @readonly
     */
    readonly pisnNumber: PartyNumber;
    /**
     * @summary `calcCtatInfo`.
     * @description
     *
     * Challenge and expected-response values. Omit when the Visitor PINX must
     * fetch parameters itself; include them when the Home PINX supplies them
     * (ECMA-243 §6.5.1.1). Extra pairs may be stored for a later SS-CTAT
     * (§6.5.6.1, note 5).
     * @public
     * @readonly
     */
    readonly calcCtatInfo: OPTIONAL<CalcCtatInfo>;
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
        calcCtatInfo: OPTIONAL<CalcCtatInfo>,
        dummyExtension: OPTIONAL<DummyExtension>
    ) {
        this.pisnNumber = pisnNumber;
        this.calcCtatInfo = calcCtatInfo;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a AuthCtmArg
     * @description
     * 
     * This takes an `object` and converts it to a `AuthCtmArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthCtmArg`.
     * @returns {AuthCtmArg}
     */
    public static _from_object (_o: { [_K in keyof (AuthCtmArg)]: (AuthCtmArg)[_K] }): AuthCtmArg {
        return new AuthCtmArg(_o.pisnNumber, _o.calcCtatInfo, _o.dummyExtension);
    }


}

/**
 * @summary The Leading Root Component Types of AuthCtmArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthCtmArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pisnNumber", false, $.hasAnyTag),
    new $.ComponentSpec("calcCtatInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of AuthCtmArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthCtmArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthCtmArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthCtmArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthCtmArg: $.ASN1Decoder<AuthCtmArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthCtmArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthCtmArg (el: _Element): AuthCtmArg {
    if (!_cached_decoder_for_AuthCtmArg) { _cached_decoder_for_AuthCtmArg = function (el: _Element): AuthCtmArg {
    let pisnNumber!: PartyNumber;
    let calcCtatInfo: OPTIONAL<CalcCtatInfo>;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "pisnNumber": (_el: _Element): void => { pisnNumber = _decode_PartyNumber(_el); },
        "calcCtatInfo": (_el: _Element): void => { calcCtatInfo = $._decode_implicit<CalcCtatInfo>(() => _decode_CalcCtatInfo)(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthCtmArg,
        _extension_additions_list_spec_for_AuthCtmArg,
        _root_component_type_list_2_spec_for_AuthCtmArg,
        undefined,
    );
    return new AuthCtmArg(
        pisnNumber,
        calcCtatInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_AuthCtmArg(el);
}

let _cached_encoder_for_AuthCtmArg: $.ASN1Encoder<AuthCtmArg> | null = null;

/**
 * @summary Encodes a(n) AuthCtmArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthCtmArg, encoded as an ASN.1 Element.
 */
export
function _encode_AuthCtmArg (value: AuthCtmArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthCtmArg) { _cached_encoder_for_AuthCtmArg = function (value: AuthCtmArg, elGetter: $.ASN1Encoder<AuthCtmArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.pisnNumber, $.BER));
    if (value.calcCtatInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalcCtatInfo, $.BER)(value.calcCtatInfo, $.BER));
    }
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthCtmArg(value, elGetter);
}


/* eslint-enable */
