/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { SmDeliverParameter, _decode_SmDeliverParameter, _encode_SmDeliverParameter } from "../Short-Message-Service-Operations-asn1-97/SmDeliverParameter.ta.mjs";
// export { SmDeliverParameter, _decode_SmDeliverParameter, _encode_SmDeliverParameter } from "../Short-Message-Service-Operations-asn1-97/SmDeliverParameter.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";
// export { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";


/**
 * @summary SmsDeliverArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsDeliverArg ::= SEQUENCE {
 *     originatingAddress PartyNumber,
 *     destinationAddress PartyNumber,
 *     originatingName Name OPTIONAL,
 *     smDeliverParameter SmDeliverParameter,
 *     userData UserData,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsDeliverArg {
    /**
     * @summary `originatingAddress`.
     * @public
     * @readonly
     */
    readonly originatingAddress: PartyNumber;
    /**
     * @summary `destinationAddress`.
     * @public
     * @readonly
     */
    readonly destinationAddress: PartyNumber;
    /**
     * @summary `originatingName`.
     * @public
     * @readonly
     */
    readonly originatingName: OPTIONAL<Name>;
    /**
     * @summary `smDeliverParameter`.
     * @public
     * @readonly
     */
    readonly smDeliverParameter: SmDeliverParameter;
    /**
     * @summary `userData`.
     * @public
     * @readonly
     */
    readonly userData: UserData;
    /**
     * @summary `smsExtension`.
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        originatingAddress: PartyNumber,
        destinationAddress: PartyNumber,
        originatingName: OPTIONAL<Name>,
        smDeliverParameter: SmDeliverParameter,
        userData: UserData,
        smsExtension: OPTIONAL<SmsExtension>
    ) {
        this.originatingAddress = originatingAddress;
        this.destinationAddress = destinationAddress;
        this.originatingName = originatingName;
        this.smDeliverParameter = smDeliverParameter;
        this.userData = userData;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsDeliverArg
     * @description
     * 
     * This takes an `object` and converts it to a `SmsDeliverArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsDeliverArg`.
     * @returns {SmsDeliverArg}
     */
    public static _from_object (_o: { [_K in keyof (SmsDeliverArg)]: (SmsDeliverArg)[_K] }): SmsDeliverArg {
        return new SmsDeliverArg(_o.originatingAddress, _o.destinationAddress, _o.originatingName, _o.smDeliverParameter, _o.userData, _o.smsExtension);
    }


}

/**
 * @summary The Leading Root Component Types of SmsDeliverArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsDeliverArg: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingAddress", false, $.hasAnyTag),
    new $.ComponentSpec("destinationAddress", false, $.hasAnyTag),
    new $.ComponentSpec("originatingName", true, $.or($.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("smDeliverParameter", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("userData", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsDeliverArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsDeliverArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsDeliverArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsDeliverArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsDeliverArg: $.ASN1Decoder<SmsDeliverArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsDeliverArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsDeliverArg (el: _Element): SmsDeliverArg {
    if (!_cached_decoder_for_SmsDeliverArg) { _cached_decoder_for_SmsDeliverArg = function (el: _Element): SmsDeliverArg {
    let originatingAddress!: PartyNumber;
    let destinationAddress!: PartyNumber;
    let originatingName: OPTIONAL<Name>;
    let smDeliverParameter!: SmDeliverParameter;
    let userData!: UserData;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "originatingAddress": (_el: _Element): void => { originatingAddress = _decode_PartyNumber(_el); },
        "destinationAddress": (_el: _Element): void => { destinationAddress = _decode_PartyNumber(_el); },
        "originatingName": (_el: _Element): void => { originatingName = _decode_Name(_el); },
        "smDeliverParameter": (_el: _Element): void => { smDeliverParameter = _decode_SmDeliverParameter(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsDeliverArg,
        _extension_additions_list_spec_for_SmsDeliverArg,
        _root_component_type_list_2_spec_for_SmsDeliverArg,
        undefined,
    );
    return new SmsDeliverArg(
        originatingAddress,
        destinationAddress,
        originatingName,
        smDeliverParameter,
        userData,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsDeliverArg(el);
}

let _cached_encoder_for_SmsDeliverArg: $.ASN1Encoder<SmsDeliverArg> | null = null;

/**
 * @summary Encodes a(n) SmsDeliverArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsDeliverArg, encoded as an ASN.1 Element.
 */
export
function _encode_SmsDeliverArg (value: SmsDeliverArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsDeliverArg) { _cached_encoder_for_SmsDeliverArg = function (value: SmsDeliverArg, elGetter: $.ASN1Encoder<SmsDeliverArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.originatingAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.destinationAddress, $.BER));
    if (value.originatingName !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.originatingName, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_SmDeliverParameter(value.smDeliverParameter, $.BER));
    _components.push(/* REQUIRED   */ _encode_UserData(value.userData, $.BER));
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsDeliverArg(value, elGetter);
}


/* eslint-enable */
