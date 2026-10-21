/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EndDesignation, _decode_EndDesignation, _encode_EndDesignation, _enum_for_EndDesignation } from "../Call-Transfer-Operations-asn1-97/EndDesignation.ta.mjs";
import { PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { CallStatus, CallStatus_answered /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CallStatus, _encode_CallStatus, _enum_for_CallStatus } from "../Call-Transfer-Operations-asn1-97/CallStatus.ta.mjs";
import { CTCompleteArg_argumentExtension, _decode_CTCompleteArg_argumentExtension, _encode_CTCompleteArg_argumentExtension } from "../Call-Transfer-Operations-asn1-97/CTCompleteArg-argumentExtension.ta.mjs";

/**
 * @summary CTCompleteArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTCompleteArg ::= SEQUENCE {
 *     endDesignation EndDesignation,
 *     redirectionNumber PresentedNumberScreened,
 *     basicCallInfoElements PSS1InformationElement OPTIONAL,
 *     -- ISO/IEC 11572 information element
 *     -- Progress indicator is conveyed
 *     redirectionName Name OPTIONAL,
 *     callStatus CallStatus DEFAULT answered,
 *     argumentExtension CHOICE {
 *         single [9] IMPLICIT Extension {{CTExtSet}},
 *         multiple [10] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CTCompleteArg {
    /**
     * @summary `endDesignation`.
     * @public
     * @readonly
     */
    readonly endDesignation: EndDesignation;
    /**
     * @summary `redirectionNumber`.
     * @public
     * @readonly
     */
    readonly redirectionNumber: PresentedNumberScreened;
    /**
     * @summary `basicCallInfoElements`.
     * @public
     * @readonly
     */
    readonly basicCallInfoElements: OPTIONAL<PSS1InformationElement>;
    /**
     * @summary `redirectionName`.
     * @public
     * @readonly
     */
    readonly redirectionName: OPTIONAL<Name>;
    /**
     * @summary `callStatus`.
     * @public
     * @readonly
     */
    readonly callStatus: OPTIONAL<CallStatus>;
    /**
     * @summary `argumentExtension`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CTCompleteArg_argumentExtension>;

    constructor (
        endDesignation: EndDesignation,
        redirectionNumber: PresentedNumberScreened,
        basicCallInfoElements: OPTIONAL<PSS1InformationElement>,
        redirectionName: OPTIONAL<Name>,
        callStatus: OPTIONAL<CallStatus>,
        argumentExtension: OPTIONAL<CTCompleteArg_argumentExtension>
    ) {
        this.endDesignation = endDesignation;
        this.redirectionNumber = redirectionNumber;
        this.basicCallInfoElements = basicCallInfoElements;
        this.redirectionName = redirectionName;
        this.callStatus = callStatus;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CTCompleteArg
     * @description
     * 
     * This takes an `object` and converts it to a `CTCompleteArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTCompleteArg`.
     * @returns {CTCompleteArg}
     */
    public static _from_object (_o: { [_K in keyof (CTCompleteArg)]: (CTCompleteArg)[_K] }): CTCompleteArg {
        return new CTCompleteArg(_o.endDesignation, _o.redirectionNumber, _o.basicCallInfoElements, _o.redirectionName, _o.callStatus, _o.argumentExtension);
    }

    /**
     * @summary Getter that returns the default value for `callStatus`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_callStatus () { return CallStatus_answered; }        /**
         * @summary The enum used as the type of the component `endDesignation`
         * @public
         * @static
         */

    public static _enum_for_endDesignation = _enum_for_EndDesignation;        /**
         * @summary The enum used as the type of the component `callStatus`
         * @public
         * @static
         */

    public static _enum_for_callStatus = _enum_for_CallStatus;
}

/**
 * @summary The Leading Root Component Types of CTCompleteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTCompleteArg: $.ComponentSpec[] = [
    new $.ComponentSpec("endDesignation", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("redirectionNumber", false, $.hasAnyTag),
    new $.ComponentSpec("basicCallInfoElements", true, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("redirectionName", true, $.or($.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("callStatus", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10)))
];

/**
 * @summary The Trailing Root Component Types of CTCompleteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTCompleteArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTCompleteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTCompleteArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTCompleteArg: $.ASN1Decoder<CTCompleteArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTCompleteArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTCompleteArg (el: _Element): CTCompleteArg {
    if (!_cached_decoder_for_CTCompleteArg) { _cached_decoder_for_CTCompleteArg = function (el: _Element): CTCompleteArg {
    let endDesignation!: EndDesignation;
    let redirectionNumber!: PresentedNumberScreened;
    let basicCallInfoElements: OPTIONAL<PSS1InformationElement>;
    let redirectionName: OPTIONAL<Name>;
    let callStatus: OPTIONAL<CallStatus> = CTCompleteArg._default_value_for_callStatus;
    let argumentExtension: OPTIONAL<CTCompleteArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "endDesignation": (_el: _Element): void => { endDesignation = _decode_EndDesignation(_el); },
        "redirectionNumber": (_el: _Element): void => { redirectionNumber = _decode_PresentedNumberScreened(_el); },
        "basicCallInfoElements": (_el: _Element): void => { basicCallInfoElements = _decode_PSS1InformationElement(_el); },
        "redirectionName": (_el: _Element): void => { redirectionName = _decode_Name(_el); },
        "callStatus": (_el: _Element): void => { callStatus = _decode_CallStatus(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CTCompleteArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTCompleteArg,
        _extension_additions_list_spec_for_CTCompleteArg,
        _root_component_type_list_2_spec_for_CTCompleteArg,
        undefined,
    );
    return new CTCompleteArg(
        endDesignation,
        redirectionNumber,
        basicCallInfoElements,
        redirectionName,
        callStatus,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CTCompleteArg(el);
}

let _cached_encoder_for_CTCompleteArg: $.ASN1Encoder<CTCompleteArg> | null = null;

/**
 * @summary Encodes a(n) CTCompleteArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTCompleteArg, encoded as an ASN.1 Element.
 */
export
function _encode_CTCompleteArg (value: CTCompleteArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTCompleteArg) { _cached_encoder_for_CTCompleteArg = function (value: CTCompleteArg, _elGetter: $.ASN1Encoder<CTCompleteArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_EndDesignation(value.endDesignation, $.BER));
    _components.push(/* REQUIRED   */ _encode_PresentedNumberScreened(value.redirectionNumber, $.BER));
    if (value.basicCallInfoElements !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.basicCallInfoElements, $.BER));
    }
    if (value.redirectionName !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.redirectionName, $.BER));
    }
    if (value.callStatus !== undefined && !$.deepEq(value.callStatus, CTCompleteArg._default_value_for_callStatus)) {
        _components.push(/* IF_DEFAULT */ _encode_CallStatus(value.callStatus, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CTCompleteArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTCompleteArg(value, elGetter);
}

/* eslint-enable */
