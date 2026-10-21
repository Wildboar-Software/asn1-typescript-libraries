/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { CanCompute, _decode_CanCompute, _encode_CanCompute } from "../CT-Authentication-Operations/CanCompute.ta.mjs";
// export { CanCompute, _decode_CanCompute, _encode_CanCompute } from "../CT-Authentication-Operations/CanCompute.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";


/**
 * @summary CtatParamArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtatParamArg ::= SEQUENCE {
 *     pisnNumber PartyNumber,
 *     canCompute CanCompute OPTIONAL,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CtatParamArg {
    /**
     * @summary `pisnNumber`.
     * @public
     * @readonly
     */
    readonly pisnNumber: PartyNumber;
    /**
     * @summary `canCompute`.
     * @public
     * @readonly
     */
    readonly canCompute: OPTIONAL<CanCompute>;
    /**
     * @summary `dummyExtension`.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        pisnNumber: PartyNumber,
        canCompute: OPTIONAL<CanCompute>,
        dummyExtension: OPTIONAL<DummyExtension>
    ) {
        this.pisnNumber = pisnNumber;
        this.canCompute = canCompute;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a CtatParamArg
     * @description
     * 
     * This takes an `object` and converts it to a `CtatParamArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtatParamArg`.
     * @returns {CtatParamArg}
     */
    public static _from_object (_o: { [_K in keyof (CtatParamArg)]: (CtatParamArg)[_K] }): CtatParamArg {
        return new CtatParamArg(_o.pisnNumber, _o.canCompute, _o.dummyExtension);
    }


}

/**
 * @summary The Leading Root Component Types of CtatParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtatParamArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pisnNumber", false, $.hasAnyTag),
    new $.ComponentSpec("canCompute", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of CtatParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtatParamArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtatParamArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtatParamArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtatParamArg: $.ASN1Decoder<CtatParamArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtatParamArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtatParamArg (el: _Element): CtatParamArg {
    if (!_cached_decoder_for_CtatParamArg) { _cached_decoder_for_CtatParamArg = function (el: _Element): CtatParamArg {
    let pisnNumber!: PartyNumber;
    let canCompute: OPTIONAL<CanCompute>;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "pisnNumber": (_el: _Element): void => { pisnNumber = _decode_PartyNumber(_el); },
        "canCompute": (_el: _Element): void => { canCompute = _decode_CanCompute(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CtatParamArg,
        _extension_additions_list_spec_for_CtatParamArg,
        _root_component_type_list_2_spec_for_CtatParamArg,
        undefined,
    );
    return new CtatParamArg(
        pisnNumber,
        canCompute,
        dummyExtension
    );
}; }
    return _cached_decoder_for_CtatParamArg(el);
}

let _cached_encoder_for_CtatParamArg: $.ASN1Encoder<CtatParamArg> | null = null;

/**
 * @summary Encodes a(n) CtatParamArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtatParamArg, encoded as an ASN.1 Element.
 */
export
function _encode_CtatParamArg (value: CtatParamArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtatParamArg) { _cached_encoder_for_CtatParamArg = function (value: CtatParamArg, elGetter: $.ASN1Encoder<CtatParamArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.pisnNumber, $.BER));
    if (value.canCompute !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CanCompute(value.canCompute, $.BER));
    }
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CtatParamArg(value, elGetter);
}


/* eslint-enable */
