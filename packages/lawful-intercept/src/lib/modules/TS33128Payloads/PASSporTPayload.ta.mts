/* eslint-disable */
import {
    type GeneralizedTime,
    type UTF8String,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type STIRSHAKENOriginator, _decode_STIRSHAKENOriginator, _encode_STIRSHAKENOriginator } from "../TS33128Payloads/STIRSHAKENOriginator.ta.mjs";
// export { STIRSHAKENOriginator, _decode_STIRSHAKENOriginator, _encode_STIRSHAKENOriginator } from "../TS33128Payloads/STIRSHAKENOriginator.ta.mjs";
import { type STIRSHAKENDestinations, _decode_STIRSHAKENDestinations, _encode_STIRSHAKENDestinations } from "../TS33128Payloads/STIRSHAKENDestinations.ta.mjs";
// export { STIRSHAKENDestinations, _decode_STIRSHAKENDestinations, _encode_STIRSHAKENDestinations } from "../TS33128Payloads/STIRSHAKENDestinations.ta.mjs";
import { Attestation, _decode_Attestation, _encode_Attestation, _enum_for_Attestation } from "../TS33128Payloads/Attestation.ta.mjs";
// export { Attestation, _enum_for_Attestation, Attestation_attestationA /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationA /* IMPORTED_SHORT_ENUMERATION_ITEM */, Attestation_attestationB /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationB /* IMPORTED_SHORT_ENUMERATION_ITEM */, Attestation_attestationC /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Attestation, _encode_Attestation } from "../TS33128Payloads/Attestation.ta.mjs";
import { type STIRSHAKENDestination, _decode_STIRSHAKENDestination, _encode_STIRSHAKENDestination } from "../TS33128Payloads/STIRSHAKENDestination.ta.mjs";
// export { STIRSHAKENDestination, _decode_STIRSHAKENDestination, _encode_STIRSHAKENDestination } from "../TS33128Payloads/STIRSHAKENDestination.ta.mjs";


/**
 * @summary PASSporTPayload
 * @description
 * 
 * NOTE 3: Void.
 *
 * NOTE 4: Void.
 *
 * 3GPP TS 33.128, clause 7.11.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PASSporTPayload ::= SEQUENCE
 * {
 *     issuedAtTime    [1] GeneralizedTime,
 *     originator      [2] STIRSHAKENOriginator,
 *     destination     [3] STIRSHAKENDestinations,
 *     attestation     [4] Attestation,
 *     origId          [5] UTF8String,
 *     diversion       [6] STIRSHAKENDestination
 * }
 * ```
 * 
 * @class
 */
export
class PASSporTPayload {
    /**
     * @summary `issuedAtTime`.
     * @description
     *
     * Shall be populated with the GenrealizedTime format timestamp converted
     * from the NumericDate contained in the 'iat' parameter of the PASSporT
     * Payload as defined in RFC 8225 [69] clause 5.1.1 and in RFC 8946 [76]
     * clause 3.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly issuedAtTime: GeneralizedTime;
    /**
     * @summary `originator`.
     * @description
     *
     * Shall be populated with the value of the "orig" claim of the PASSporT
     * Payload as defined in RFC 8225 [69] clause 5.2.1 and in RFC 8946 [76]
     * clause 3.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly originator: STIRSHAKENOriginator;
    /**
     * @summary `destination`.
     * @description
     *
     * Shall contain the list of destinations contained in the "dest" claim of
     * the PASSporT Payload as defined in RFC 8225 [69] clause 5.2.1 and in RFC
     * 8946 [76] clause 3.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly destination: STIRSHAKENDestinations;
    /**
     * @summary `attestation`.
     * @description
     *
     * Indicates the attestation level as defined in RFC 8588 [71] clause 4 for
     * the "shaken" PASSporT. The different values of attestation level are A =
     * Full Attestation, B= Partial Attestation, C = Gateway Attestation. For
     * "div" PASSporT where "attestation" is not available, the placeholder
     * value "Not available" shall be used.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly attestation: Attestation;
    /**
     * @summary `origId`.
     * @description
     *
     * Shall be populated with the value of the origID contained in the 'origid'
     * parameter of the PASSporT Payload as defined in RFC 8588 [71] clause 5
     * for the "shaken" PASSporT. For "div" PASSporT where "origId" is not
     * available, the placeholder value "Not available" shall be used.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly origId: UTF8String;
    /**
     * @summary `diversion`.
     * @description
     *
     * Shall be populated with the "div" claim of the "div" PASSporT payload.
     * For first diversion this contains the original identifier of the
     * destination as defined in RFC 8946 [76] clause 3 for "div" PASSporT.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly diversion: STIRSHAKENDestination;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        issuedAtTime: GeneralizedTime,
        originator: STIRSHAKENOriginator,
        destination: STIRSHAKENDestinations,
        attestation: Attestation,
        origId: UTF8String,
        diversion: STIRSHAKENDestination,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.issuedAtTime = issuedAtTime;
        this.originator = originator;
        this.destination = destination;
        this.attestation = attestation;
        this.origId = origId;
        this.diversion = diversion;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PASSporTPayload
     * @description
     * 
     * This takes an `object` and converts it to a `PASSporTPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PASSporTPayload`.
     * @returns {PASSporTPayload}
     */
    public static _from_object (_o: { [_K in keyof (PASSporTPayload)]: (PASSporTPayload)[_K] }): PASSporTPayload {
        return new PASSporTPayload(_o.issuedAtTime, _o.originator, _o.destination, _o.attestation, _o.origId, _o.diversion, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `attestation`
         * @public
         * @static
         */

    public static _enum_for_attestation: typeof _enum_for_Attestation = _enum_for_Attestation;
}

/**
 * @summary The Leading Root Component Types of PASSporTPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PASSporTPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("issuedAtTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originator", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attestation", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("origId", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("diversion", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PASSporTPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PASSporTPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PASSporTPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PASSporTPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PASSporTPayload: $.ASN1Decoder<PASSporTPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PASSporTPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PASSporTPayload (el: _Element): PASSporTPayload {
    if (!_cached_decoder_for_PASSporTPayload) { _cached_decoder_for_PASSporTPayload = function (el: _Element): PASSporTPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("PASSporTPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "issuedAtTime";
    sequence[1].name = "originator";
    sequence[2].name = "destination";
    sequence[3].name = "attestation";
    sequence[4].name = "origId";
    sequence[5].name = "diversion";
    let issuedAtTime!: GeneralizedTime;
    let originator!: STIRSHAKENOriginator;
    let destination!: STIRSHAKENDestinations;
    let attestation!: Attestation;
    let origId!: UTF8String;
    let diversion!: STIRSHAKENDestination;
    issuedAtTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(sequence[0]);
    originator = $._decode_explicit<STIRSHAKENOriginator>(() => _decode_STIRSHAKENOriginator)(sequence[1]);
    destination = $._decode_implicit<STIRSHAKENDestinations>(() => _decode_STIRSHAKENDestinations)(sequence[2]);
    attestation = $._decode_implicit<Attestation>(() => _decode_Attestation)(sequence[3]);
    origId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[4]);
    diversion = $._decode_explicit<STIRSHAKENDestination>(() => _decode_STIRSHAKENDestination)(sequence[5]);
    return new PASSporTPayload(
        issuedAtTime,
        originator,
        destination,
        attestation,
        origId,
        diversion,
        sequence.slice(6),
    );
}; }
    return _cached_decoder_for_PASSporTPayload(el);
}

let _cached_encoder_for_PASSporTPayload: $.ASN1Encoder<PASSporTPayload> | null = null;

/**
 * @summary Encodes a(n) PASSporTPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PASSporTPayload, encoded as an ASN.1 Element.
 */
export
function _encode_PASSporTPayload (value: PASSporTPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PASSporTPayload) { _cached_encoder_for_PASSporTPayload = function (value: PASSporTPayload, elGetter: $.ASN1Encoder<PASSporTPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.issuedAtTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_STIRSHAKENOriginator, $.BER)(value.originator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_STIRSHAKENDestinations, $.BER)(value.destination, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Attestation, $.BER)(value.attestation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.origId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 6, () => _encode_STIRSHAKENDestination, $.BER)(value.diversion, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PASSporTPayload(value, elGetter);
}


/* eslint-enable */
