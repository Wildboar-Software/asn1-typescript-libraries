/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";


/**
 * @summary CalledIdentityChange
 * @description
 *
 * One change of the terminating identity after the session is established,
 * with the time of the SIP UPDATE or SIP RE-INVITE that carried it (clause
 * 6.3.1.2). Populated by the S-CSCF, P-CSCF, E-CSCF, AS, TF, TRF, and
 * ATCF.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This field holds the set of terminating identity address changes after IMS
 * session establishment and the associated time stamp for each. These
 * addresses are obtained from the From SIP header field of a SIP UPDATE
 * request or SIP RE-INVITE request.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.23A.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledIdentityChange ::= SEQUENCE {
 *    calledIdentity   [0] InvolvedParty OPTIONAL,
 *    changeTime       [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CalledIdentityChange {
    /**
     * @summary `calledIdentity`.
     * @description
     *
     * Terminating identity received in a SIP UPDATE or SIP RE-INVITE after the
     * session was established (clause 6.3.1.2). Taken from the From header of
     * that request.
     *
     * @public
     * @readonly
     */
    readonly calledIdentity: OPTIONAL<InvolvedParty>;
    /**
     * @summary `changeTime`.
     * @description
     *
     * Time of the SIP UPDATE or SIP RE-INVITE that carried the changed
     * terminating identity (clause 6.3.1.2).
     *
     * @public
     * @readonly
     */
    readonly changeTime: OPTIONAL<OCTET_STRING>;

    constructor (
        calledIdentity?: OPTIONAL<InvolvedParty>,
        changeTime?: OPTIONAL<OCTET_STRING>
    ) {
        this.calledIdentity = calledIdentity;
        this.changeTime = changeTime;
    
        if (this.changeTime !== undefined && (this.changeTime.length !== 9)) {
            throw new ASN1SizeError("CalledIdentityChange.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CalledIdentityChange
     * @description
     * 
     * This takes an `object` and converts it to a `CalledIdentityChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CalledIdentityChange`.
     * @returns {CalledIdentityChange}
     */
    public static _from_object (_o: { [_K in keyof (CalledIdentityChange)]: (CalledIdentityChange)[_K] }): CalledIdentityChange {
        return new CalledIdentityChange(_o.calledIdentity, _o.changeTime);
    }


}

/**
 * @summary The Leading Root Component Types of CalledIdentityChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CalledIdentityChange: $.ComponentSpec[] = [
    new $.ComponentSpec("calledIdentity", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("changeTime", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CalledIdentityChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CalledIdentityChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CalledIdentityChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CalledIdentityChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CalledIdentityChange: $.ASN1Decoder<CalledIdentityChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledIdentityChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledIdentityChange (el: _Element): CalledIdentityChange {
    if (!_cached_decoder_for_CalledIdentityChange) { _cached_decoder_for_CalledIdentityChange = function (el: _Element): CalledIdentityChange {
    let calledIdentity: OPTIONAL<InvolvedParty>;
    let changeTime: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "calledIdentity": (_el: _Element): void => { calledIdentity = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CalledIdentityChange,
        _extension_additions_list_spec_for_CalledIdentityChange,
        _root_component_type_list_2_spec_for_CalledIdentityChange,
        undefined,
    );
    return new CalledIdentityChange(
        calledIdentity,
        changeTime
    );
}; }
    return _cached_decoder_for_CalledIdentityChange(el);
}

let _cached_encoder_for_CalledIdentityChange: $.ASN1Encoder<CalledIdentityChange> | null = null;

/**
 * @summary Encodes a(n) CalledIdentityChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledIdentityChange, encoded as an ASN.1 Element.
 */
export
function _encode_CalledIdentityChange (value: CalledIdentityChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledIdentityChange) { _cached_encoder_for_CalledIdentityChange = function (value: CalledIdentityChange, _elGetter: $.ASN1Encoder<CalledIdentityChange>): _Element {
    const _components: _Element[] = [];
    if (value.calledIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_InvolvedParty, $.BER)(value.calledIdentity, $.BER));
    }
    if (value.changeTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CalledIdentityChange(value, elGetter);
}


/* eslint-enable */
