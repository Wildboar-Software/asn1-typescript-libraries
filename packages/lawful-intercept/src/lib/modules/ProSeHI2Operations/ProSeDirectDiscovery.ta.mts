/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ProSeDirectDiscoveryEvent, _decode_ProSeDirectDiscoveryEvent, _encode_ProSeDirectDiscoveryEvent, _enum_for_ProSeDirectDiscoveryEvent } from "../ProSeHI2Operations/ProSeDirectDiscoveryEvent.ta.mjs";
// export { ProSeDirectDiscoveryEvent, _enum_for_ProSeDirectDiscoveryEvent, ProSeDirectDiscoveryEvent_proseDiscoveryRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, proseDiscoveryRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeDirectDiscoveryEvent_proseMatchReport /* IMPORTED_LONG_ENUMERATION_ITEM */, proseMatchReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeDirectDiscoveryEvent, _encode_ProSeDirectDiscoveryEvent } from "../ProSeHI2Operations/ProSeDirectDiscoveryEvent.ta.mjs";
import { type TargetRole, _decode_TargetRole, _encode_TargetRole, _enum_for_TargetRole } from "../ProSeHI2Operations/TargetRole.ta.mjs";
// export { TargetRole, _enum_for_TargetRole, TargetRole_announcingUE /* IMPORTED_LONG_ENUMERATION_ITEM */, announcingUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetRole_monitoringUE /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TargetRole, _encode_TargetRole } from "../ProSeHI2Operations/TargetRole.ta.mjs";
import { DirectDiscoveryData, _decode_DirectDiscoveryData, _encode_DirectDiscoveryData } from "../ProSeHI2Operations/DirectDiscoveryData.ta.mjs";
// export { DirectDiscoveryData, _decode_DirectDiscoveryData, _encode_DirectDiscoveryData } from "../ProSeHI2Operations/DirectDiscoveryData.ta.mjs";


/**
 * @summary ProSeDirectDiscovery
 * @description
 * 
 * One ProSe Direct Discovery report: the event, the target's IMSI and role, and
 * the discovery data. A match report may also identify the other UE. 3GPP TS
 * 33.108, clause 13.2.2.2 and annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeDirectDiscovery ::= SEQUENCE
 * {
 *     proseDirectDiscoveryEvent    [0] ProSeDirectDiscoveryEvent,
 *     targetImsi                    [1] OCTET STRING (SIZE (3..8)),
 *             -- See MAP format [4] International Mobile
 *             -- Station Identity E.212 number beginning with Mobile Country Code
 *     targetRole                    [2] TargetRole,
 *     directDiscoveryData            [3] DirectDiscoveryData,
 *     metadata                    [4] UTF8String OPTIONAL,
 *     otherUeImsi                    [5] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *             -- See MAP format [4] International Mobile
 *             -- Station Identity E.212 number beginning with Mobile Country Code
 * 
 *     ...
 * 
 * 
 * }
 * ```
 * 
 * @class
 */
export
class ProSeDirectDiscovery {
    /**
     * @summary `proseDirectDiscoveryEvent`.
     * @description
     * 
     * Discovery request or match report. Required. 3GPP TS 33.108, clause
     * 13.2.2.2, tables 13.2.2.2-1 and 13.2.2.2-2.
     * 
     * @public
     * @readonly
     */
    readonly proseDirectDiscoveryEvent: ProSeDirectDiscoveryEvent;
    /**
     * @summary `targetImsi`.
     * @description
     * 
     * IMSI of the target. Required. MAP format of 3GPP TS 29.002, an E.212
     * number beginning with the mobile country code, three to eight octets.
     * 3GPP TS 33.108, clause 13.2, table 13.2.1-2, and annex B.13.
     * 
     * @public
     * @readonly
     */
    readonly targetImsi: OCTET_STRING;
    /**
     * @summary `targetRole`.
     * @description
     * 
     * Whether the target is the announcing UE or the monitoring UE. Required.
     * The role decides which conditional discovery parameters apply. 3GPP TS
     * 33.108, clause 13.2.2.2.
     * 
     * @public
     * @readonly
     */
    readonly targetRole: TargetRole;
    /**
     * @summary `directDiscoveryData`.
     * @description
     * 
     * PLMN, application identity, application code, optional mask, and validity
     * timer for this discovery event. 3GPP TS 33.108, clause 13.2 and annex
     * B.13.
     * 
     * @public
     * @readonly
     */
    readonly directDiscoveryData: DirectDiscoveryData;
    /**
     * @summary `metadata`.
     * @description
     * 
     * Metadata for a ProSe application identity. On a discovery request,
     * conditional and only when the target is announcing. On a match report,
     * conditional when available. The text layout is not defined. 3GPP TS
     * 33.108, clause 13.2.2.2, tables 13.2.2.2-1 and 13.2.2.2-2.
     * 
     * @public
     * @readonly
     */
    readonly metadata: OPTIONAL<UTF8String>;
    /**
     * @summary `otherUeImsi`.
     * @description
     * 
     * IMSI of the other UE. Used on a match report, where a second UE is
     * involved, and only when available. Not listed on the discovery-request
     * record. Same MAP / E.212 form as the target IMSI, three to eight octets.
     * 3GPP TS 33.108, clause 13.2, table 13.2.2.2-2, and annex B.13.
     * 
     * @public
     * @readonly
     */
    readonly otherUeImsi: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        proseDirectDiscoveryEvent: ProSeDirectDiscoveryEvent,
        targetImsi: OCTET_STRING,
        targetRole: TargetRole,
        directDiscoveryData: DirectDiscoveryData,
        metadata?: OPTIONAL<UTF8String>,
        otherUeImsi?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.proseDirectDiscoveryEvent = proseDirectDiscoveryEvent;
        this.targetImsi = targetImsi;
        this.targetRole = targetRole;
        this.directDiscoveryData = directDiscoveryData;
        this.metadata = metadata;
        this.otherUeImsi = otherUeImsi;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProSeDirectDiscovery
     * @description
     * 
     * This takes an `object` and converts it to a `ProSeDirectDiscovery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProSeDirectDiscovery`.
     * @returns {ProSeDirectDiscovery}
     */
    public static _from_object (_o: { [_K in keyof (ProSeDirectDiscovery)]: (ProSeDirectDiscovery)[_K] }): ProSeDirectDiscovery {
        return new ProSeDirectDiscovery(_o.proseDirectDiscoveryEvent, _o.targetImsi, _o.targetRole, _o.directDiscoveryData, _o.metadata, _o.otherUeImsi, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `proseDirectDiscoveryEvent`
         * @public
         * @static
         */

    public static _enum_for_proseDirectDiscoveryEvent = _enum_for_ProSeDirectDiscoveryEvent;        /**
         * @summary The enum used as the type of the component `targetRole`
         * @public
         * @static
         */

    public static _enum_for_targetRole = _enum_for_TargetRole;
}

/**
 * @summary The Leading Root Component Types of ProSeDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProSeDirectDiscovery: $.ComponentSpec[] = [
    new $.ComponentSpec("proseDirectDiscoveryEvent", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetImsi", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetRole", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("directDiscoveryData", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("metadata", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("otherUeImsi", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ProSeDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProSeDirectDiscovery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProSeDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProSeDirectDiscovery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProSeDirectDiscovery: $.ASN1Decoder<ProSeDirectDiscovery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeDirectDiscovery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeDirectDiscovery (el: _Element): ProSeDirectDiscovery {
    if (!_cached_decoder_for_ProSeDirectDiscovery) { _cached_decoder_for_ProSeDirectDiscovery = function (el: _Element): ProSeDirectDiscovery {
    let proseDirectDiscoveryEvent!: ProSeDirectDiscoveryEvent;
    let targetImsi!: OCTET_STRING;
    let targetRole!: TargetRole;
    let directDiscoveryData!: DirectDiscoveryData;
    let metadata: OPTIONAL<UTF8String>;
    let otherUeImsi: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "proseDirectDiscoveryEvent": (_el: _Element): void => { proseDirectDiscoveryEvent = $._decode_implicit<ProSeDirectDiscoveryEvent>(() => _decode_ProSeDirectDiscoveryEvent)(_el); },
        "targetImsi": (_el: _Element): void => {
            targetImsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (targetImsi.length < 3 || targetImsi.length > 8) {
                throw new ASN1SizeError("ProSeDirectDiscovery.targetImsi violates SIZE constraint");
            }
        },
        "targetRole": (_el: _Element): void => { targetRole = $._decode_implicit<TargetRole>(() => _decode_TargetRole)(_el); },
        "directDiscoveryData": (_el: _Element): void => { directDiscoveryData = $._decode_implicit<DirectDiscoveryData>(() => _decode_DirectDiscoveryData)(_el); },
        "metadata": (_el: _Element): void => { metadata = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "otherUeImsi": (_el: _Element): void => {
            otherUeImsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (otherUeImsi.length < 3 || otherUeImsi.length > 8) {
                throw new ASN1SizeError("ProSeDirectDiscovery.otherUeImsi violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProSeDirectDiscovery,
        _extension_additions_list_spec_for_ProSeDirectDiscovery,
        _root_component_type_list_2_spec_for_ProSeDirectDiscovery,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProSeDirectDiscovery(
        proseDirectDiscoveryEvent,
        targetImsi,
        targetRole,
        directDiscoveryData,
        metadata,
        otherUeImsi,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProSeDirectDiscovery(el);
}

let _cached_encoder_for_ProSeDirectDiscovery: $.ASN1Encoder<ProSeDirectDiscovery> | null = null;

/**
 * @summary Encodes a(n) ProSeDirectDiscovery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeDirectDiscovery, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeDirectDiscovery (value: ProSeDirectDiscovery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeDirectDiscovery) { _cached_encoder_for_ProSeDirectDiscovery = function (value: ProSeDirectDiscovery, elGetter: $.ASN1Encoder<ProSeDirectDiscovery>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProSeDirectDiscoveryEvent, $.BER)(value.proseDirectDiscoveryEvent, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.targetImsi, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TargetRole, $.BER)(value.targetRole, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_DirectDiscoveryData, $.BER)(value.directDiscoveryData, $.BER);
    if (value.metadata !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.metadata, $.BER);
    }
    if (value.otherUeImsi !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.otherUeImsi, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProSeDirectDiscovery(value, elGetter);
}


/* eslint-enable */
