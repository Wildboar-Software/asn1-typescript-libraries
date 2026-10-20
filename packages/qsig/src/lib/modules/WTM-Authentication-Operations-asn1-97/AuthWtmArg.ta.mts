/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Authentication-Operations-asn1-97/WtmUserId.ta.mjs";
import { CalcWtatInfo, _decode_CalcWtatInfo, _encode_CalcWtatInfo } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";

/**
 * @summary AuthWtmArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthWtmArg ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     calcWtatInfo [1] IMPLICIT CalcWtatInfo OPTIONAL,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AuthWtmArg {
    /**
     * @summary `wtmUserId`.
     * @public
     * @readonly
     */
    readonly wtmUserId: WtmUserId;
    /**
     * @summary `calcWtatInfo`.
     * @public
     * @readonly
     */
    readonly calcWtatInfo: OPTIONAL<CalcWtatInfo>;
    /**
     * @summary `dummyExtension`.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        wtmUserId: WtmUserId,
        calcWtatInfo: OPTIONAL<CalcWtatInfo>,
        dummyExtension: OPTIONAL<DummyExtension>
    ) {
        this.wtmUserId = wtmUserId;
        this.calcWtatInfo = calcWtatInfo;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a AuthWtmArg
     * @description
     * 
     * This takes an `object` and converts it to a `AuthWtmArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthWtmArg`.
     * @returns {AuthWtmArg}
     */
    public static _from_object (_o: { [_K in keyof (AuthWtmArg)]: (AuthWtmArg)[_K] }): AuthWtmArg {
        return new AuthWtmArg(_o.wtmUserId, _o.calcWtatInfo, _o.dummyExtension);
    }

}

/**
 * @summary The Leading Root Component Types of AuthWtmArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthWtmArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("calcWtatInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of AuthWtmArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthWtmArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthWtmArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthWtmArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthWtmArg: $.ASN1Decoder<AuthWtmArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthWtmArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthWtmArg (el: _Element): AuthWtmArg {
    if (!_cached_decoder_for_AuthWtmArg) { _cached_decoder_for_AuthWtmArg = function (el: _Element): AuthWtmArg {
    let wtmUserId!: WtmUserId;
    let calcWtatInfo: OPTIONAL<CalcWtatInfo>;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "calcWtatInfo": (_el: _Element): void => { calcWtatInfo = $._decode_implicit<CalcWtatInfo>(() => _decode_CalcWtatInfo)(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthWtmArg,
        _extension_additions_list_spec_for_AuthWtmArg,
        _root_component_type_list_2_spec_for_AuthWtmArg,
        undefined,
    );
    return new AuthWtmArg(
        wtmUserId,
        calcWtatInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_AuthWtmArg(el);
}

let _cached_encoder_for_AuthWtmArg: $.ASN1Encoder<AuthWtmArg> | null = null;

/**
 * @summary Encodes a(n) AuthWtmArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthWtmArg, encoded as an ASN.1 Element.
 */
export
function _encode_AuthWtmArg (value: AuthWtmArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthWtmArg) { _cached_encoder_for_AuthWtmArg = function (value: AuthWtmArg, elGetter: $.ASN1Encoder<AuthWtmArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    if (value.calcWtatInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalcWtatInfo, $.BER)(value.calcWtatInfo, $.BER));
    }
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthWtmArg(value, elGetter);
}

/* eslint-enable */
