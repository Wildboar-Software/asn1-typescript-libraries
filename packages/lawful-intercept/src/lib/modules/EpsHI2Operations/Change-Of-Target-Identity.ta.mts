/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../EpsHI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../EpsHI2Operations/PartyInformation.ta.mjs";


/**
 * @summary Change_Of_Target_Identity
 * @description
 * 
 * Old and new identities from a subscriber-record change. Mandatory on the HSS
 * subscriber-record-change REPORT (table 10.5.1.1.17, table 10.5.2). An IMS HSS
 * change may also carry IMPI, SIP URI, and TEL URI (table 7.2). The same
 * parameter is used when PS IRI is delivered on this HI2 (table 6.2). 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Change-Of-Target-Identity ::= SEQUENCE
 * {
 *             new-MSISDN                                [1] PartyInformation OPTIONAL,
 *             -- new MSISDN of the target, encoded in the same format as the AddressString
 *                                                                                                         -- parameters defined in MAP format document TS 29.002 [4]
 *                                                                                                         new-A-MSISDN                [2] PartyInformation OPTIONAL,
 *             -- new A-MSISDN of the target, encoded in the same format as the AddressString
 *                                                                                                         -- parameters defined in TS 23.003 [25]
 *                                                                                                         old-MSISDN                [3] PartyInformation OPTIONAL,
 *             -- old MSISDN of the target, encoded in the same format as the AddressString
 *                                                                                                         -- parameters defined in MAP format document TS 29.002 [4]
 *                                                                                                         old-A-MSISDN                [4] PartyInformation OPTIONAL,
 *             -- old A-MSISDN of the target, encoded in the same format as the AddressString
 *                                                                                                         -- parameters defined in TS 23.003 [25]
 *             new-IMSI                                 [5] PartyInformation OPTIONAL,
 *                     -- See MAP format [4] International Mobile
 *                                                                                                             -- Station Identity E.212 number beginning with Mobile Country Code
 *             old-IMSI                                 [6] PartyInformation OPTIONAL,
 *                     -- See MAP format [4] International Mobile
 *                                                                                                             -- Station Identity E.212 number beginning with Mobile Country Code
 *             new-IMEI                                 [7] PartyInformation OPTIONAL,
 *                     -- See MAP format [4] International Mobile
 *                                                                                                             -- Equipement Identity defined in MAP format document TS 29.002 [4]
 *             old-IMEI                                 [8] PartyInformation OPTIONAL,
 *                     -- See MAP format [4] International Mobile
 *                                                                                                             -- Equipement Identity defined in MAP format document TS 29.002 [4]
 * 
 * ...,
 *     new-IMPI                            [9] PartyInformation OPTIONAL,
 *     old-IMPI                            [10] PartyInformation OPTIONAL,
 *     new-SIP-URI                            [11] PartyInformation OPTIONAL,
 *     old-SIP-URI                            [12] PartyInformation OPTIONAL,
 *     new-TEL-URI                            [13] PartyInformation OPTIONAL,
 *     old-TEL-URI                            [14] PartyInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Change_Of_Target_Identity {
    /**
     * @summary `new_MSISDN`.
     * @description
     * 
     * MSISDN after the change, when it changed (table 10.5.1.1.17). Encoded in
     * the MAP address-string format of 3GPP TS 29.002.
     * 
     * @public
     * @readonly
     */
    readonly new_MSISDN: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_A_MSISDN`.
     * @description
     * 
     * Additional MSISDN after the change, when it changed (table 10.5.1.1.17).
     * Encoded in the address-string format of 3GPP TS 23.003.
     * 
     * @public
     * @readonly
     */
    readonly new_A_MSISDN: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_MSISDN`.
     * @description
     * 
     * MSISDN before the change (table 10.5.1.1.17). Encoded in the MAP
     * address-string format of 3GPP TS 29.002.
     * 
     * @public
     * @readonly
     */
    readonly old_MSISDN: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_A_MSISDN`.
     * @description
     * 
     * Additional MSISDN before the change (table 10.5.1.1.17). Encoded in the
     * address-string format of 3GPP TS 23.003.
     * 
     * @public
     * @readonly
     */
    readonly old_A_MSISDN: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_IMSI`.
     * @description
     * 
     * IMSI after the change (table 10.5.1.1.17). An E.212 number beginning with
     * the mobile country code, in MAP format (3GPP TS 29.002).
     * 
     * @public
     * @readonly
     */
    readonly new_IMSI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_IMSI`.
     * @description
     * 
     * IMSI before the change (table 10.5.1.1.17). An E.212 number beginning
     * with the mobile country code, in MAP format (3GPP TS 29.002).
     * 
     * @public
     * @readonly
     */
    readonly old_IMSI: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_IMEI`.
     * @description
     * 
     * IMEI after the change (table 10.5.1.1.17). Mobile equipment identity in
     * MAP format (3GPP TS 29.002).
     * 
     * @public
     * @readonly
     */
    readonly new_IMEI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_IMEI`.
     * @description
     * 
     * IMEI before the change (table 10.5.1.1.17). Mobile equipment identity in
     * MAP format (3GPP TS 29.002).
     * 
     * @public
     * @readonly
     */
    readonly old_IMEI: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_IMPI`.
     * @description
     * 
     * IMPI after the change. Table 7.2 includes IMPI in an IMS
     * subscriber-record change. Table 10.5.1.1.17 does not list it for the EPS
     * HSS record.
     * 
     * @public
     * @readonly
     */
    readonly new_IMPI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_IMPI`.
     * @description
     * 
     * IMPI before the change. Table 7.2 includes IMPI in an IMS
     * subscriber-record change. Table 10.5.1.1.17 does not list it for the EPS
     * HSS record.
     * 
     * @public
     * @readonly
     */
    readonly old_IMPI: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_SIP_URI`.
     * @description
     * 
     * SIP URI after the change. Table 7.2 includes a SIP URI in an IMS
     * subscriber-record change. The EPS HSS table does not list it.
     * 
     * @public
     * @readonly
     */
    readonly new_SIP_URI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_SIP_URI`.
     * @description
     * 
     * SIP URI before the change. Table 7.2 includes a SIP URI in an IMS
     * subscriber-record change. The EPS HSS table does not list it.
     * 
     * @public
     * @readonly
     */
    readonly old_SIP_URI: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_TEL_URI`.
     * @description
     * 
     * TEL URI after the change. Table 7.2 includes a TEL URI in an IMS
     * subscriber-record change. The EPS HSS table does not list it.
     * 
     * @public
     * @readonly
     */
    readonly new_TEL_URI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_TEL_URI`.
     * @description
     * 
     * TEL URI before the change. Table 7.2 includes a TEL URI in an IMS
     * subscriber-record change. The EPS HSS table does not list it.
     * 
     * @public
     * @readonly
     */
    readonly old_TEL_URI: OPTIONAL<PartyInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        new_MSISDN?: OPTIONAL<PartyInformation>,
        new_A_MSISDN?: OPTIONAL<PartyInformation>,
        old_MSISDN?: OPTIONAL<PartyInformation>,
        old_A_MSISDN?: OPTIONAL<PartyInformation>,
        new_IMSI?: OPTIONAL<PartyInformation>,
        old_IMSI?: OPTIONAL<PartyInformation>,
        new_IMEI?: OPTIONAL<PartyInformation>,
        old_IMEI?: OPTIONAL<PartyInformation>,
        new_IMPI?: OPTIONAL<PartyInformation>,
        old_IMPI?: OPTIONAL<PartyInformation>,
        new_SIP_URI?: OPTIONAL<PartyInformation>,
        old_SIP_URI?: OPTIONAL<PartyInformation>,
        new_TEL_URI?: OPTIONAL<PartyInformation>,
        old_TEL_URI?: OPTIONAL<PartyInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.new_MSISDN = new_MSISDN;
        this.new_A_MSISDN = new_A_MSISDN;
        this.old_MSISDN = old_MSISDN;
        this.old_A_MSISDN = old_A_MSISDN;
        this.new_IMSI = new_IMSI;
        this.old_IMSI = old_IMSI;
        this.new_IMEI = new_IMEI;
        this.old_IMEI = old_IMEI;
        this.new_IMPI = new_IMPI;
        this.old_IMPI = old_IMPI;
        this.new_SIP_URI = new_SIP_URI;
        this.old_SIP_URI = old_SIP_URI;
        this.new_TEL_URI = new_TEL_URI;
        this.old_TEL_URI = old_TEL_URI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Change_Of_Target_Identity
     * @description
     * 
     * This takes an `object` and converts it to a `Change_Of_Target_Identity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Change_Of_Target_Identity`.
     * @returns {Change_Of_Target_Identity}
     */
    public static _from_object (_o: { [_K in keyof (Change_Of_Target_Identity)]: (Change_Of_Target_Identity)[_K] }): Change_Of_Target_Identity {
        return new Change_Of_Target_Identity(_o.new_MSISDN, _o.new_A_MSISDN, _o.old_MSISDN, _o.old_A_MSISDN, _o.new_IMSI, _o.old_IMSI, _o.new_IMEI, _o.old_IMEI, _o.new_IMPI, _o.old_IMPI, _o.new_SIP_URI, _o.old_SIP_URI, _o.new_TEL_URI, _o.old_TEL_URI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Change_Of_Target_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Change_Of_Target_Identity: $.ComponentSpec[] = [
    new $.ComponentSpec("new-MSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("new-A-MSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("old-MSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("old-A-MSISDN", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("new-IMSI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("old-IMSI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("new-IMEI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("old-IMEI", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Change_Of_Target_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Change_Of_Target_Identity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Change_Of_Target_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Change_Of_Target_Identity: $.ComponentSpec[] = [
    new $.ComponentSpec("new-IMPI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("old-IMPI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("new-SIP-URI", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("old-SIP-URI", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("new-TEL-URI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("old-TEL-URI", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_Change_Of_Target_Identity: $.ASN1Decoder<Change_Of_Target_Identity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Change_Of_Target_Identity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Change_Of_Target_Identity (el: _Element): Change_Of_Target_Identity {
    if (!_cached_decoder_for_Change_Of_Target_Identity) { _cached_decoder_for_Change_Of_Target_Identity = function (el: _Element): Change_Of_Target_Identity {
    let new_MSISDN: OPTIONAL<PartyInformation>;
    let new_A_MSISDN: OPTIONAL<PartyInformation>;
    let old_MSISDN: OPTIONAL<PartyInformation>;
    let old_A_MSISDN: OPTIONAL<PartyInformation>;
    let new_IMSI: OPTIONAL<PartyInformation>;
    let old_IMSI: OPTIONAL<PartyInformation>;
    let new_IMEI: OPTIONAL<PartyInformation>;
    let old_IMEI: OPTIONAL<PartyInformation>;
    let new_IMPI: OPTIONAL<PartyInformation>;
    let old_IMPI: OPTIONAL<PartyInformation>;
    let new_SIP_URI: OPTIONAL<PartyInformation>;
    let old_SIP_URI: OPTIONAL<PartyInformation>;
    let new_TEL_URI: OPTIONAL<PartyInformation>;
    let old_TEL_URI: OPTIONAL<PartyInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "new-MSISDN": (_el: _Element): void => { new_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-A-MSISDN": (_el: _Element): void => { new_A_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-MSISDN": (_el: _Element): void => { old_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-A-MSISDN": (_el: _Element): void => { old_A_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMSI": (_el: _Element): void => { new_IMSI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMSI": (_el: _Element): void => { old_IMSI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMEI": (_el: _Element): void => { new_IMEI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMEI": (_el: _Element): void => { old_IMEI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMPI": (_el: _Element): void => { new_IMPI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMPI": (_el: _Element): void => { old_IMPI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-SIP-URI": (_el: _Element): void => { new_SIP_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-SIP-URI": (_el: _Element): void => { old_SIP_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-TEL-URI": (_el: _Element): void => { new_TEL_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-TEL-URI": (_el: _Element): void => { old_TEL_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Change_Of_Target_Identity,
        _extension_additions_list_spec_for_Change_Of_Target_Identity,
        _root_component_type_list_2_spec_for_Change_Of_Target_Identity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Change_Of_Target_Identity(
        new_MSISDN,
        new_A_MSISDN,
        old_MSISDN,
        old_A_MSISDN,
        new_IMSI,
        old_IMSI,
        new_IMEI,
        old_IMEI,
        new_IMPI,
        old_IMPI,
        new_SIP_URI,
        old_SIP_URI,
        new_TEL_URI,
        old_TEL_URI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Change_Of_Target_Identity(el);
}

let _cached_encoder_for_Change_Of_Target_Identity: $.ASN1Encoder<Change_Of_Target_Identity> | null = null;

/**
 * @summary Encodes a(n) Change_Of_Target_Identity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Change_Of_Target_Identity, encoded as an ASN.1 Element.
 */
export
function _encode_Change_Of_Target_Identity (value: Change_Of_Target_Identity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Change_Of_Target_Identity) { _cached_encoder_for_Change_Of_Target_Identity = function (value: Change_Of_Target_Identity, elGetter: $.ASN1Encoder<Change_Of_Target_Identity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.new_MSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyInformation, $.BER)(value.new_MSISDN, $.BER);
    }
    if (value.new_A_MSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_PartyInformation, $.BER)(value.new_A_MSISDN, $.BER);
    }
    if (value.old_MSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PartyInformation, $.BER)(value.old_MSISDN, $.BER);
    }
    if (value.old_A_MSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_PartyInformation, $.BER)(value.old_A_MSISDN, $.BER);
    }
    if (value.new_IMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PartyInformation, $.BER)(value.new_IMSI, $.BER);
    }
    if (value.old_IMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PartyInformation, $.BER)(value.old_IMSI, $.BER);
    }
    if (value.new_IMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_PartyInformation, $.BER)(value.new_IMEI, $.BER);
    }
    if (value.old_IMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PartyInformation, $.BER)(value.old_IMEI, $.BER);
    }
    if (value.new_IMPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PartyInformation, $.BER)(value.new_IMPI, $.BER);
    }
    if (value.old_IMPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_PartyInformation, $.BER)(value.old_IMPI, $.BER);
    }
    if (value.new_SIP_URI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PartyInformation, $.BER)(value.new_SIP_URI, $.BER);
    }
    if (value.old_SIP_URI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_PartyInformation, $.BER)(value.old_SIP_URI, $.BER);
    }
    if (value.new_TEL_URI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.new_TEL_URI, $.BER);
    }
    if (value.old_TEL_URI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_PartyInformation, $.BER)(value.old_TEL_URI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Change_Of_Target_Identity(value, elGetter);
}


/* eslint-enable */
