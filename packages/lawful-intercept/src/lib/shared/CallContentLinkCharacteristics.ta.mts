/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CCLink_State, _decode_CCLink_State, _encode_CCLink_State, _enum_for_CCLink_State } from "./CCLink-State.ta.mjs";
// export { CCLink_State, _enum_for_CCLink_State, CCLink_State_setUpInProcess /* IMPORTED_LONG_ENUMERATION_ITEM */, setUpInProcess /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCLink_State_callActive /* IMPORTED_LONG_ENUMERATION_ITEM */, callActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCLink_State_callReleased /* IMPORTED_LONG_ENUMERATION_ITEM */, callReleased /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCLink_State_lack_of_resource /* IMPORTED_LONG_ENUMERATION_ITEM */, lack_of_resource /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CCLink_State, _encode_CCLink_State } from "./CCLink-State.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "./TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "./TimeStamp.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";


/**
 * @summary CallContentLinkCharacteristics
 * @description
 * 
 * Characteristics of one content-of-communication link from the mediation
 * function toward the LEMF. LI-specific. Include a component when the
 * corresponding link event is detected. Clause A.4 uses two one-way 64 kbit/s
 * links for a bi-directional target call. The link state, release time, Q.850
 * release cause, and LEMF directory number are all optional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.4, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallContentLinkCharacteristics ::= SEQUENCE
 * {
 *     cCLink-State            [1] CCLink-State OPTIONAL,
 *         -- current state of the CCLink
 *     release-Time            [2] TimeStamp OPTIONAL,
 *         -- date and time of the release of the Call Content Link.
 *     release-Reason            [3] OCTET STRING (SIZE(2)) OPTIONAL,
 *         -- Release cause coded in Q.850 [31] format
 *     lEMF-Address            [4] CalledPartyNumber OPTIONAL,
 *         -- Directory number used to route the call toward the LEMF
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CallContentLinkCharacteristics {
    /**
     * @summary `cCLink_State`.
     * @description
     *
     * Current state of the CC link: set-up in process, active, released, or
     * unable to be established for lack of resource at the mediation function.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly cCLink_State: OPTIONAL<CCLink_State>;
    /**
     * @summary `release_Time`.
     * @description
     *
     * Date and time of the release of the call-content link. The timestamp's
     * minimum resolution is one second.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly release_Time: OPTIONAL<TimeStamp>;
    /**
     * @summary `release_Reason`.
     * @description
     *
     * Release cause of the CC link, coded in ITU-T Q.850 format, two octets.
     * Table A.3.2 also lists the cause indicator on this parameter.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly release_Reason: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lEMF_Address`.
     * @description
     *
     * Directory number used to route the call toward the LEMF. Clause A.4.1
     * assigns a fixed LEMF address for each interception and says that address
     * is not used for identification. Correlation uses the LI identifiers in
     * clauses 6 and A.1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly lEMF_Address: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * BER extension additions that were not recognized. Clause C.1.2.4 refers
     * unrecognized fields and parameters to annex G. The LEMF ignores an
     * unrecognized parameter name and continues the record; that case does not
     * by itself require an error, because the network may be using a newer
     * specification. An unrecognized or disallowed value is also ignored, and
     * the LEMF may raise an alarm. An undecodable ROSE record is rejected. The
     * module allows an `OperationErrors` value when an operation or a parameter
     * is misunderstood. Annex G does not name those error codes.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.4, annex G, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCLink_State: OPTIONAL<CCLink_State>,
        release_Time: OPTIONAL<TimeStamp>,
        release_Reason: OPTIONAL<OCTET_STRING>,
        lEMF_Address: OPTIONAL<CalledPartyNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cCLink_State = cCLink_State;
        this.release_Time = release_Time;
        this.release_Reason = release_Reason;
        this.lEMF_Address = lEMF_Address;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CallContentLinkCharacteristics
     * @description
     * 
     * This takes an `object` and converts it to a `CallContentLinkCharacteristics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallContentLinkCharacteristics`.
     * @returns {CallContentLinkCharacteristics}
     */
    public static _from_object (_o: { [_K in keyof (CallContentLinkCharacteristics)]: (CallContentLinkCharacteristics)[_K] }): CallContentLinkCharacteristics {
        return new CallContentLinkCharacteristics(_o.cCLink_State, _o.release_Time, _o.release_Reason, _o.lEMF_Address, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cCLink_State`
         * @description
         *
         * Current state of this CC link, including lack of resource at the
         * mediation function.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_cCLink_State: typeof _enum_for_CCLink_State = _enum_for_CCLink_State;
}

/**
 * @summary The Leading Root Component Types of CallContentLinkCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallContentLinkCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("cCLink-State", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("release-Time", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("release-Reason", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("lEMF-Address", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallContentLinkCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallContentLinkCharacteristics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallContentLinkCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallContentLinkCharacteristics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallContentLinkCharacteristics: $.ASN1Decoder<CallContentLinkCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallContentLinkCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallContentLinkCharacteristics (el: _Element): CallContentLinkCharacteristics {
    if (!_cached_decoder_for_CallContentLinkCharacteristics) { _cached_decoder_for_CallContentLinkCharacteristics = function (el: _Element): CallContentLinkCharacteristics {
    let cCLink_State: OPTIONAL<CCLink_State>;
    let release_Time: OPTIONAL<TimeStamp>;
    let release_Reason: OPTIONAL<OCTET_STRING>;
    let lEMF_Address: OPTIONAL<CalledPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCLink-State": (_el: _Element): void => { cCLink_State = $._decode_implicit<CCLink_State>(() => _decode_CCLink_State)(_el); },
        "release-Time": (_el: _Element): void => { release_Time = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "release-Reason": (_el: _Element): void => {
            release_Reason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (release_Reason.length < 2 || release_Reason.length > 2) {
                throw new ASN1SizeError("CallContentLinkCharacteristics.release_Reason violates SIZE constraint");
            }
        },
        "lEMF-Address": (_el: _Element): void => { lEMF_Address = $._decode_explicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallContentLinkCharacteristics,
        _extension_additions_list_spec_for_CallContentLinkCharacteristics,
        _root_component_type_list_2_spec_for_CallContentLinkCharacteristics,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallContentLinkCharacteristics(
        cCLink_State,
        release_Time,
        release_Reason,
        lEMF_Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallContentLinkCharacteristics(el);
}

let _cached_encoder_for_CallContentLinkCharacteristics: $.ASN1Encoder<CallContentLinkCharacteristics> | null = null;

/**
 * @summary Encodes a(n) CallContentLinkCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallContentLinkCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_CallContentLinkCharacteristics (value: CallContentLinkCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallContentLinkCharacteristics) { _cached_encoder_for_CallContentLinkCharacteristics = function (value: CallContentLinkCharacteristics, elGetter: $.ASN1Encoder<CallContentLinkCharacteristics>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.cCLink_State !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CCLink_State, $.BER)(value.cCLink_State, $.BER);
    }
    if (value.release_Time !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.release_Time, $.BER);
    }
    if (value.release_Reason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.release_Reason, $.BER);
    }
    if (value.lEMF_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_CalledPartyNumber, $.BER)(value.lEMF_Address, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallContentLinkCharacteristics(value, elGetter);
}


/* eslint-enable */
