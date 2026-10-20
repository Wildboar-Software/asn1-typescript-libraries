/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { MessageReference, _decode_MessageReference, _encode_MessageReference } from "../Short-Message-Service-Operations-asn1-97/MessageReference.ta.mjs";
// export { MessageReference, _decode_MessageReference, _encode_MessageReference } from "../Short-Message-Service-Operations-asn1-97/MessageReference.ta.mjs";
import { SmSubmitParameter, _decode_SmSubmitParameter, _encode_SmSubmitParameter } from "../Short-Message-Service-Operations-asn1-97/SmSubmitParameter.ta.mjs";
// export { SmSubmitParameter, _decode_SmSubmitParameter, _encode_SmSubmitParameter } from "../Short-Message-Service-Operations-asn1-97/SmSubmitParameter.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";
// export { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";


/**
 * @summary SmsSubmitArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsSubmitArg ::= SEQUENCE {
 *     destinationAddress PartyNumber,
 *     originatingAddress PartyNumber,
 *     messageReference MessageReference,
 *     smSubmitParameter SmSubmitParameter,
 *     userData UserData,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsSubmitArg {
    /**
     * @summary `destinationAddress`.
     * @public
     * @readonly
     */
    readonly destinationAddress: PartyNumber;
    /**
     * @summary `originatingAddress`.
     * @public
     * @readonly
     */
    readonly originatingAddress: PartyNumber;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: MessageReference;
    /**
     * @summary `smSubmitParameter`.
     * @public
     * @readonly
     */
    readonly smSubmitParameter: SmSubmitParameter;
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
        destinationAddress: PartyNumber,
        originatingAddress: PartyNumber,
        messageReference: MessageReference,
        smSubmitParameter: SmSubmitParameter,
        userData: UserData,
        smsExtension: OPTIONAL<SmsExtension>
    ) {
        this.destinationAddress = destinationAddress;
        this.originatingAddress = originatingAddress;
        this.messageReference = messageReference;
        this.smSubmitParameter = smSubmitParameter;
        this.userData = userData;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsSubmitArg
     * @description
     * 
     * This takes an `object` and converts it to a `SmsSubmitArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsSubmitArg`.
     * @returns {SmsSubmitArg}
     */
    public static _from_object (_o: { [_K in keyof (SmsSubmitArg)]: (SmsSubmitArg)[_K] }): SmsSubmitArg {
        return new SmsSubmitArg(_o.destinationAddress, _o.originatingAddress, _o.messageReference, _o.smSubmitParameter, _o.userData, _o.smsExtension);
    }


}

/**
 * @summary The Leading Root Component Types of SmsSubmitArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsSubmitArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationAddress", false, $.hasAnyTag),
    new $.ComponentSpec("originatingAddress", false, $.hasAnyTag),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("smSubmitParameter", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("userData", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsSubmitArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsSubmitArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsSubmitArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsSubmitArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsSubmitArg: $.ASN1Decoder<SmsSubmitArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsSubmitArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsSubmitArg (el: _Element): SmsSubmitArg {
    if (!_cached_decoder_for_SmsSubmitArg) { _cached_decoder_for_SmsSubmitArg = function (el: _Element): SmsSubmitArg {
    let destinationAddress!: PartyNumber;
    let originatingAddress!: PartyNumber;
    let messageReference!: MessageReference;
    let smSubmitParameter!: SmSubmitParameter;
    let userData!: UserData;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "destinationAddress": (_el: _Element): void => { destinationAddress = _decode_PartyNumber(_el); },
        "originatingAddress": (_el: _Element): void => { originatingAddress = _decode_PartyNumber(_el); },
        "messageReference": (_el: _Element): void => { messageReference = _decode_MessageReference(_el); },
        "smSubmitParameter": (_el: _Element): void => { smSubmitParameter = _decode_SmSubmitParameter(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsSubmitArg,
        _extension_additions_list_spec_for_SmsSubmitArg,
        _root_component_type_list_2_spec_for_SmsSubmitArg,
        undefined,
    );
    return new SmsSubmitArg(
        destinationAddress,
        originatingAddress,
        messageReference,
        smSubmitParameter,
        userData,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsSubmitArg(el);
}

let _cached_encoder_for_SmsSubmitArg: $.ASN1Encoder<SmsSubmitArg> | null = null;

/**
 * @summary Encodes a(n) SmsSubmitArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsSubmitArg, encoded as an ASN.1 Element.
 */
export
function _encode_SmsSubmitArg (value: SmsSubmitArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsSubmitArg) { _cached_encoder_for_SmsSubmitArg = function (value: SmsSubmitArg, elGetter: $.ASN1Encoder<SmsSubmitArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.destinationAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.originatingAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_MessageReference(value.messageReference, $.BER));
    _components.push(/* REQUIRED   */ _encode_SmSubmitParameter(value.smSubmitParameter, $.BER));
    _components.push(/* REQUIRED   */ _encode_UserData(value.userData, $.BER));
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsSubmitArg(value, elGetter);
}


/* eslint-enable */
