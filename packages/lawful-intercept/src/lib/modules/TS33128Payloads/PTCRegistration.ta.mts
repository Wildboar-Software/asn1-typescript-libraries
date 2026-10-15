/* eslint-disable */
import {
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { PTCRegistrationRequest, _decode_PTCRegistrationRequest, _encode_PTCRegistrationRequest, _enum_for_PTCRegistrationRequest } from "../TS33128Payloads/PTCRegistrationRequest.ta.mjs";
// export { PTCRegistrationRequest, _enum_for_PTCRegistrationRequest, PTCRegistrationRequest_register /* IMPORTED_LONG_ENUMERATION_ITEM */, register /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationRequest_reRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationRequest_deRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, deRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCRegistrationRequest, _encode_PTCRegistrationRequest } from "../TS33128Payloads/PTCRegistrationRequest.ta.mjs";
import { PTCRegistrationOutcome, _decode_PTCRegistrationOutcome, _encode_PTCRegistrationOutcome, _enum_for_PTCRegistrationOutcome } from "../TS33128Payloads/PTCRegistrationOutcome.ta.mjs";
// export { PTCRegistrationOutcome, _enum_for_PTCRegistrationOutcome, PTCRegistrationOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCRegistrationOutcome, _encode_PTCRegistrationOutcome } from "../TS33128Payloads/PTCRegistrationOutcome.ta.mjs";


/**
 * @summary PTCRegistration
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCRegistration record when the IRI-POI present in the PTC server detects
 * that a PTC target matching one of the PTC target identifiers, referenced in
 * clause 7.5.1.1, provided via LI_X1 has registered, re-registered, or
 * de-registered for PTC services , regardless of whether it is successful or
 * unsuccessful. Accordingly, the IRI-POI in the PTC server generates the xIRI
 * when the following event is detected:
 *
 * - when the PTC server receives a SIP REGISTER from a PTC target.
 *
 * NOTE: The pTCTargetInformation choice PTCChatGroupID is not applicable for
 * this xIRI.
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistration ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCServerURI                  [2] UTF8String,
 *     pTCRegistrationRequest        [3] PTCRegistrationRequest,
 *     pTCRegistrationOutcome        [4] PTCRegistrationOutcome
 * }
 * ```
 * 
 * @class
 */
export
class PTCRegistration {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN shall be provided for PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.1.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCServerURI`.
     * @description
     *
     * Shall include the identity of the PTC server serving the PTC target.
     *
     * 3GPP TS 33.128, clause 7.5.2.1.
     *
     * @public
     * @readonly
     */
    readonly pTCServerURI: UTF8String;
    /**
     * @summary `pTCRegistrationRequest`.
     * @description
     *
     * Identifies the type of registration request (register, re-register, or
     * de-register).
     *
     * 3GPP TS 33.128, clause 7.5.2.1.
     *
     * @public
     * @readonly
     */
    readonly pTCRegistrationRequest: PTCRegistrationRequest;
    /**
     * @summary `pTCRegistrationOutcome`.
     * @description
     *
     * Identifies success or failure of the registration.
     *
     * 3GPP TS 33.128, clause 7.5.2.1.
     *
     * @public
     * @readonly
     */
    readonly pTCRegistrationOutcome: PTCRegistrationOutcome;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCServerURI: UTF8String,
        pTCRegistrationRequest: PTCRegistrationRequest,
        pTCRegistrationOutcome: PTCRegistrationOutcome,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCServerURI = pTCServerURI;
        this.pTCRegistrationRequest = pTCRegistrationRequest;
        this.pTCRegistrationOutcome = pTCRegistrationOutcome;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCRegistration
     * @description
     * 
     * This takes an `object` and converts it to a `PTCRegistration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCRegistration`.
     * @returns {PTCRegistration}
     */
    public static _from_object (_o: { [_K in keyof (PTCRegistration)]: (PTCRegistration)[_K] }): PTCRegistration {
        return new PTCRegistration(_o.pTCTargetInformation, _o.pTCServerURI, _o.pTCRegistrationRequest, _o.pTCRegistrationOutcome, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCRegistrationRequest`
         * @public
         * @static
         */

    public static _enum_for_pTCRegistrationRequest = _enum_for_PTCRegistrationRequest;        /**
         * @summary The enum used as the type of the component `pTCRegistrationOutcome`
         * @public
         * @static
         */

    public static _enum_for_pTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;
}

/**
 * @summary The Leading Root Component Types of PTCRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCRegistration: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCRegistrationRequest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCRegistrationOutcome", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PTCRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCRegistration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCRegistration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCRegistration: $.ASN1Decoder<PTCRegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCRegistration (el: _Element): PTCRegistration {
    if (!_cached_decoder_for_PTCRegistration) { _cached_decoder_for_PTCRegistration = function (el: _Element): PTCRegistration {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("PTCRegistration contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCServerURI";
    sequence[2].name = "pTCRegistrationRequest";
    sequence[3].name = "pTCRegistrationOutcome";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCServerURI!: UTF8String;
    let pTCRegistrationRequest!: PTCRegistrationRequest;
    let pTCRegistrationOutcome!: PTCRegistrationOutcome;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    pTCRegistrationRequest = $._decode_implicit<PTCRegistrationRequest>(() => _decode_PTCRegistrationRequest)(sequence[2]);
    pTCRegistrationOutcome = $._decode_implicit<PTCRegistrationOutcome>(() => _decode_PTCRegistrationOutcome)(sequence[3]);
    return new PTCRegistration(
        pTCTargetInformation,
        pTCServerURI,
        pTCRegistrationRequest,
        pTCRegistrationOutcome,
        sequence.slice(4),
    );
}; }
    return _cached_decoder_for_PTCRegistration(el);
}

let _cached_encoder_for_PTCRegistration: $.ASN1Encoder<PTCRegistration> | null = null;

/**
 * @summary Encodes a(n) PTCRegistration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistration, encoded as an ASN.1 Element.
 */
export
function _encode_PTCRegistration (value: PTCRegistration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCRegistration) { _cached_encoder_for_PTCRegistration = function (value: PTCRegistration, elGetter: $.ASN1Encoder<PTCRegistration>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCRegistrationRequest, $.BER)(value.pTCRegistrationRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCRegistrationOutcome, $.BER)(value.pTCRegistrationOutcome, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCRegistration(value, elGetter);
}


/* eslint-enable */
