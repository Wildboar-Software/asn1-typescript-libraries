/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ServiceOption, _decode_ServiceOption, _encode_ServiceOption, _enum_for_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
// export { ServiceOption, _enum_for_ServiceOption, ServiceOption_inCallRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, inCallRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceOption_outCallRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, outCallRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceOption_allCallRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, allCallRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServiceOption, _encode_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
import { SessionParams, _decode_SessionParams, _encode_SessionParams } from "../PUM-Registration-Operations-asn1-97/SessionParams.ta.mjs";
// export { SessionParams, _decode_SessionParams, _encode_SessionParams } from "../PUM-Registration-Operations-asn1-97/SessionParams.ta.mjs";
import { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";
// export { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";


/**
 * @summary PumRegistrRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumRegistrRes ::= SEQUENCE {
 *     pumNumber PartyNumber,
 *     serviceOption ServiceOption OPTIONAL,
 *     -- Type of registration (InCall, OutCall or AllCall)
 *     sessionParams SessionParams OPTIONAL,
 *     -- Duration of session, Number of outgoing calls
 *     argExtension PumrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PumRegistrRes {
    /**
     * @summary `pumNumber`.
     * @public
     * @readonly
     */
    readonly pumNumber: PartyNumber;
    /**
     * @summary `serviceOption`.
     * @public
     * @readonly
     */
    readonly serviceOption: OPTIONAL<ServiceOption>;
    /**
     * @summary `sessionParams`.
     * @public
     * @readonly
     */
    readonly sessionParams: OPTIONAL<SessionParams>;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumrExtension>;

    constructor (
        pumNumber: PartyNumber,
        serviceOption: OPTIONAL<ServiceOption>,
        sessionParams: OPTIONAL<SessionParams>,
        argExtension: OPTIONAL<PumrExtension>
    ) {
        this.pumNumber = pumNumber;
        this.serviceOption = serviceOption;
        this.sessionParams = sessionParams;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PumRegistrRes
     * @description
     * 
     * This takes an `object` and converts it to a `PumRegistrRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumRegistrRes`.
     * @returns {PumRegistrRes}
     */
    public static _from_object (_o: { [_K in keyof (PumRegistrRes)]: (PumRegistrRes)[_K] }): PumRegistrRes {
        return new PumRegistrRes(_o.pumNumber, _o.serviceOption, _o.sessionParams, _o.argExtension);
    }

        /**
         * @summary The enum used as the type of the component `serviceOption`
         * @public
         * @static
         */

    public static _enum_for_serviceOption = _enum_for_ServiceOption;
}

/**
 * @summary The Leading Root Component Types of PumRegistrRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumRegistrRes: $.ComponentSpec[] = [
    new $.ComponentSpec("pumNumber", false, $.hasAnyTag),
    new $.ComponentSpec("serviceOption", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("sessionParams", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PumRegistrRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumRegistrRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumRegistrRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumRegistrRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumRegistrRes: $.ASN1Decoder<PumRegistrRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumRegistrRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumRegistrRes (el: _Element): PumRegistrRes {
    if (!_cached_decoder_for_PumRegistrRes) { _cached_decoder_for_PumRegistrRes = function (el: _Element): PumRegistrRes {
    let pumNumber!: PartyNumber;
    let serviceOption: OPTIONAL<ServiceOption>;
    let sessionParams: OPTIONAL<SessionParams>;
    let argExtension: OPTIONAL<PumrExtension>;
    const callbacks: $.DecodingMap = {
        "pumNumber": (_el: _Element): void => { pumNumber = _decode_PartyNumber(_el); },
        "serviceOption": (_el: _Element): void => { serviceOption = _decode_ServiceOption(_el); },
        "sessionParams": (_el: _Element): void => { sessionParams = _decode_SessionParams(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumRegistrRes,
        _extension_additions_list_spec_for_PumRegistrRes,
        _root_component_type_list_2_spec_for_PumRegistrRes,
        undefined,
    );
    return new PumRegistrRes(
        pumNumber,
        serviceOption,
        sessionParams,
        argExtension
    );
}; }
    return _cached_decoder_for_PumRegistrRes(el);
}

let _cached_encoder_for_PumRegistrRes: $.ASN1Encoder<PumRegistrRes> | null = null;

/**
 * @summary Encodes a(n) PumRegistrRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumRegistrRes, encoded as an ASN.1 Element.
 */
export
function _encode_PumRegistrRes (value: PumRegistrRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumRegistrRes) { _cached_encoder_for_PumRegistrRes = function (value: PumRegistrRes, elGetter: $.ASN1Encoder<PumRegistrRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.pumNumber, $.BER));
    if (value.serviceOption !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ServiceOption(value.serviceOption, $.BER));
    }
    if (value.sessionParams !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SessionParams(value.sessionParams, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumRegistrRes(value, elGetter);
}


/* eslint-enable */
