/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";


/**
 * @summary Change_Of_Target_Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Change-Of-Target-Identity ::= SEQUENCE
 * {
 *     new-MSISDN                                [1] PartyInformation OPTIONAL,
 *     -- new MSISDN of the target, encoded in the same format as the AddressString
 *     -- parameters defined in MAP format document TS 29.002 [4]
 *     old-MSISDN                [2] PartyInformation OPTIONAL,
 *     -- new MSISDN of the target, encoded in the same format as the AddressString
 *     -- parameters defined in MAP format document TS 29.002 [4]
 *     new-IMSI                                 [3] PartyInformation OPTIONAL,
 *             -- See MAP format [4] International Mobile
 *         -- Station Identity E.212 number beginning with Mobile Country Code
 *     old-IMSI                                 [4] PartyInformation OPTIONAL,
 *             -- See MAP format [4] International Mobile
 *         -- Station Identity E.212 number beginning with Mobile Country Code
 * 
 *     ...,
 *     new-IMEI                                 [5] PartyInformation OPTIONAL,
 *             -- See MAP format [4] International Mobile
 *         -- Equipement Identity defined in MAP format document TS 29.002 [4]
 *     old-IMEI                                 [6] PartyInformation OPTIONAL
 *             -- See MAP format [4] International Mobile
 *         -- Equipement Identity defined in MAP format document TS 29.002 [4]
 * }
 * ```
 * 
 * @class
 */
export
class Change_Of_Target_Identity {
    /**
     * @summary `new_MSISDN`.
     * @public
     * @readonly
     */
    readonly new_MSISDN: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_MSISDN`.
     * @public
     * @readonly
     */
    readonly old_MSISDN: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_IMSI`.
     * @public
     * @readonly
     */
    readonly new_IMSI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_IMSI`.
     * @public
     * @readonly
     */
    readonly old_IMSI: OPTIONAL<PartyInformation>;
    /**
     * @summary `new_IMEI`.
     * @public
     * @readonly
     */
    readonly new_IMEI: OPTIONAL<PartyInformation>;
    /**
     * @summary `old_IMEI`.
     * @public
     * @readonly
     */
    readonly old_IMEI: OPTIONAL<PartyInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        new_MSISDN: OPTIONAL<PartyInformation>,
        old_MSISDN: OPTIONAL<PartyInformation>,
        new_IMSI: OPTIONAL<PartyInformation>,
        old_IMSI: OPTIONAL<PartyInformation>,
        new_IMEI: OPTIONAL<PartyInformation>,
        old_IMEI: OPTIONAL<PartyInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.new_MSISDN = new_MSISDN;
        this.old_MSISDN = old_MSISDN;
        this.new_IMSI = new_IMSI;
        this.old_IMSI = old_IMSI;
        this.new_IMEI = new_IMEI;
        this.old_IMEI = old_IMEI;
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
        return new Change_Of_Target_Identity(_o.new_MSISDN, _o.old_MSISDN, _o.new_IMSI, _o.old_IMSI, _o.new_IMEI, _o.old_IMEI, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("old-MSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("new-IMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("old-IMSI", true, $.hasTag(_TagClass.context, 4))
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
    new $.ComponentSpec("new-IMEI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("old-IMEI", true, $.hasTag(_TagClass.context, 6))
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
    let old_MSISDN: OPTIONAL<PartyInformation>;
    let new_IMSI: OPTIONAL<PartyInformation>;
    let old_IMSI: OPTIONAL<PartyInformation>;
    let new_IMEI: OPTIONAL<PartyInformation>;
    let old_IMEI: OPTIONAL<PartyInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "new-MSISDN": (_el: _Element): void => { new_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-MSISDN": (_el: _Element): void => { old_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMSI": (_el: _Element): void => { new_IMSI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMSI": (_el: _Element): void => { old_IMSI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMEI": (_el: _Element): void => { new_IMEI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMEI": (_el: _Element): void => { old_IMEI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Change_Of_Target_Identity,
        _extension_additions_list_spec_for_Change_Of_Target_Identity,
        _root_component_type_list_2_spec_for_Change_Of_Target_Identity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Change_Of_Target_Identity(
        new_MSISDN,
        old_MSISDN,
        new_IMSI,
        old_IMSI,
        new_IMEI,
        old_IMEI,
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
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.new_MSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyInformation, $.BER)(value.new_MSISDN, $.BER);
    }
    if (value.old_MSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_PartyInformation, $.BER)(value.old_MSISDN, $.BER);
    }
    if (value.new_IMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PartyInformation, $.BER)(value.new_IMSI, $.BER);
    }
    if (value.old_IMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_PartyInformation, $.BER)(value.old_IMSI, $.BER);
    }
    if (value.new_IMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PartyInformation, $.BER)(value.new_IMEI, $.BER);
    }
    if (value.old_IMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PartyInformation, $.BER)(value.old_IMEI, $.BER);
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
