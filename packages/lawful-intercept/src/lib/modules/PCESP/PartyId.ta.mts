/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OPTIONAL,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyId
 * @description
 *
 * Party identity. Every component is optional.
 *
 * Components commented "Reserved" are `NULL` and have no defined use. The
 * identity strings present in the module are `dn`, `userProvided`, `ipAddress`,
 * `trunkId`, `genericAddress`, `genericDigits`, `genericName`, `port`, and
 * `context`. This edition does not define their formats, their abbreviations,
 * or which combination to populate. Annex A defers parameter definitions to
 * PacketCable PKT-SP-ESP-I04-040723.
 *
 * Clause 3.1 defines an identity as a technical label for the origin or
 * destination of traffic, such as a telephone number, or a personal number the
 * subscriber assigns to a physical access.
 *
 * Sizes, each an extensible `VisibleString`: `dn` and `userProvided` are 1 to
 * 15; `ipAddress`, `trunkId`, `genericAddress`, `genericDigits`, `port`, and
 * `context` are 1 to 32; `genericName` is 1 to 48.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 3.1 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyId ::= SEQUENCE {
 *     reserved0               [0] NULL OPTIONAL, -- Reserved
 *     reserved1               [1] NULL OPTIONAL, -- Reserved
 *     reserved2               [2] NULL OPTIONAL, -- Reserved
 *     reserved3               [3] NULL OPTIONAL, -- Reserved
 *     reserved4               [4] NULL OPTIONAL, -- Reserved
 *     reserved5               [5] NULL OPTIONAL, -- Reserved
 *     dn                      [6] VisibleString (SIZE(1..15, ...)) OPTIONAL,
 *     userProvided            [7] VisibleString (SIZE(1..15, ...)) OPTIONAL,
 *     reserved6               [8] NULL OPTIONAL, -- Reserved
 *     reserved7               [9] NULL OPTIONAL, -- Reserved
 *     ipAddress               [10] VisibleString (SIZE(1..32, ...)) OPTIONAL,
 *     reserved8               [11] NULL OPTIONAL, -- Reserved
 *     trunkId                 [12] VisibleString (SIZE(1..32, ...)) OPTIONAL,
 *     reserved9               [13] NULL OPTIONAL, -- Reserved
 *     genericAddress          [14] VisibleString (SIZE(1..32, ...)) OPTIONAL,
 *     genericDigits           [15] VisibleString (SIZE(1..32, ...)) OPTIONAL,
 *     genericName             [16] VisibleString (SIZE(1..48, ...)) OPTIONAL,
 *     port                    [17] VisibleString (SIZE(1..32, ...)) OPTIONAL,
 *     context                 [18] VisibleString (SIZE(1..32, ...)) OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PartyId {
    /**
     * @summary `reserved0`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved0: OPTIONAL<NULL>;
    /**
     * @summary `reserved1`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved1: OPTIONAL<NULL>;
    /**
     * @summary `reserved2`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved2: OPTIONAL<NULL>;
    /**
     * @summary `reserved3`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved3: OPTIONAL<NULL>;
    /**
     * @summary `reserved4`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved4: OPTIONAL<NULL>;
    /**
     * @summary `reserved5`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved5: OPTIONAL<NULL>;
    /**
     * @summary `dn`.
     * @description
     *
     * Optional identity string, size 1 to 15, extensible. This edition does not
     * define the format or expand the name `dn`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly dn: OPTIONAL<VisibleString>;
    /**
     * @summary `userProvided`.
     * @description
     *
     * Optional identity string, size 1 to 15, extensible. This edition does not
     * define the format, or what "user provided" covers.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly userProvided: OPTIONAL<VisibleString>;
    /**
     * @summary `reserved6`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved6: OPTIONAL<NULL>;
    /**
     * @summary `reserved7`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved7: OPTIONAL<NULL>;
    /**
     * @summary `ipAddress`.
     * @description
     *
     * Optional identity string, size 1 to 32, extensible. This edition does not
     * define the address textual form.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly ipAddress: OPTIONAL<VisibleString>;
    /**
     * @summary `reserved8`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved8: OPTIONAL<NULL>;
    /**
     * @summary `trunkId`.
     * @description
     *
     * Optional identity string, size 1 to 32, extensible. This edition does not
     * define the trunk numbering.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly trunkId: OPTIONAL<VisibleString>;
    /**
     * @summary `reserved9`.
     * @description
     *
     * Marked reserved. Optional `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved9: OPTIONAL<NULL>;
    /**
     * @summary `genericAddress`.
     * @description
     *
     * Optional identity string, size 1 to 32, extensible. This edition does not
     * define the address format.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly genericAddress: OPTIONAL<VisibleString>;
    /**
     * @summary `genericDigits`.
     * @description
     *
     * Optional identity string, size 1 to 32, extensible. This edition does not
     * define the digit encoding.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly genericDigits: OPTIONAL<VisibleString>;
    /**
     * @summary `genericName`.
     * @description
     *
     * Optional name string, size 1 to 48, extensible. This edition does not
     * define the character set beyond `VisibleString`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly genericName: OPTIONAL<VisibleString>;
    /**
     * @summary `port`.
     * @description
     *
     * Optional identity string, size 1 to 32, extensible. This edition does not
     * define the format.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly port: OPTIONAL<VisibleString>;
    /**
     * @summary `context`.
     * @description
     *
     * Optional identity string, size 1 to 32, extensible. This edition does not
     * define the context.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly context: OPTIONAL<VisibleString>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        reserved0?: OPTIONAL<NULL>,
        reserved1?: OPTIONAL<NULL>,
        reserved2?: OPTIONAL<NULL>,
        reserved3?: OPTIONAL<NULL>,
        reserved4?: OPTIONAL<NULL>,
        reserved5?: OPTIONAL<NULL>,
        dn?: OPTIONAL<VisibleString>,
        userProvided?: OPTIONAL<VisibleString>,
        reserved6?: OPTIONAL<NULL>,
        reserved7?: OPTIONAL<NULL>,
        ipAddress?: OPTIONAL<VisibleString>,
        reserved8?: OPTIONAL<NULL>,
        trunkId?: OPTIONAL<VisibleString>,
        reserved9?: OPTIONAL<NULL>,
        genericAddress?: OPTIONAL<VisibleString>,
        genericDigits?: OPTIONAL<VisibleString>,
        genericName?: OPTIONAL<VisibleString>,
        port?: OPTIONAL<VisibleString>,
        context?: OPTIONAL<VisibleString>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.reserved0 = reserved0;
        this.reserved1 = reserved1;
        this.reserved2 = reserved2;
        this.reserved3 = reserved3;
        this.reserved4 = reserved4;
        this.reserved5 = reserved5;
        this.dn = dn;
        this.userProvided = userProvided;
        this.reserved6 = reserved6;
        this.reserved7 = reserved7;
        this.ipAddress = ipAddress;
        this.reserved8 = reserved8;
        this.trunkId = trunkId;
        this.reserved9 = reserved9;
        this.genericAddress = genericAddress;
        this.genericDigits = genericDigits;
        this.genericName = genericName;
        this.port = port;
        this.context = context;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PartyId
     * @description
     * 
     * This takes an `object` and converts it to a `PartyId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyId`.
     * @returns {PartyId}
     */
    public static _from_object (_o: { [_K in keyof (PartyId)]: (PartyId)[_K] }): PartyId {
        return new PartyId(_o.reserved0, _o.reserved1, _o.reserved2, _o.reserved3, _o.reserved4, _o.reserved5, _o.dn, _o.userProvided, _o.reserved6, _o.reserved7, _o.ipAddress, _o.reserved8, _o.trunkId, _o.reserved9, _o.genericAddress, _o.genericDigits, _o.genericName, _o.port, _o.context, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PartyId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyId: $.ComponentSpec[] = [
    new $.ComponentSpec("reserved0", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reserved1", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reserved2", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("reserved3", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("reserved4", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("reserved5", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dn", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userProvided", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("reserved6", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("reserved7", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("ipAddress", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("reserved8", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("trunkId", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("reserved9", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("genericAddress", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("genericDigits", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("port", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("context", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of PartyId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PartyId: $.ASN1Decoder<PartyId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyId (el: _Element): PartyId {
    if (!_cached_decoder_for_PartyId) { _cached_decoder_for_PartyId = function (el: _Element): PartyId {
    let reserved0: OPTIONAL<NULL>;
    let reserved1: OPTIONAL<NULL>;
    let reserved2: OPTIONAL<NULL>;
    let reserved3: OPTIONAL<NULL>;
    let reserved4: OPTIONAL<NULL>;
    let reserved5: OPTIONAL<NULL>;
    let dn: OPTIONAL<VisibleString>;
    let userProvided: OPTIONAL<VisibleString>;
    let reserved6: OPTIONAL<NULL>;
    let reserved7: OPTIONAL<NULL>;
    let ipAddress: OPTIONAL<VisibleString>;
    let reserved8: OPTIONAL<NULL>;
    let trunkId: OPTIONAL<VisibleString>;
    let reserved9: OPTIONAL<NULL>;
    let genericAddress: OPTIONAL<VisibleString>;
    let genericDigits: OPTIONAL<VisibleString>;
    let genericName: OPTIONAL<VisibleString>;
    let port: OPTIONAL<VisibleString>;
    let context: OPTIONAL<VisibleString>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "reserved0": (_el: _Element): void => { reserved0 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved1": (_el: _Element): void => { reserved1 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved2": (_el: _Element): void => { reserved2 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved3": (_el: _Element): void => { reserved3 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved4": (_el: _Element): void => { reserved4 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved5": (_el: _Element): void => { reserved5 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dn": (_el: _Element): void => { dn = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "userProvided": (_el: _Element): void => { userProvided = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "reserved6": (_el: _Element): void => { reserved6 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved7": (_el: _Element): void => { reserved7 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ipAddress": (_el: _Element): void => { ipAddress = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "reserved8": (_el: _Element): void => { reserved8 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "trunkId": (_el: _Element): void => { trunkId = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "reserved9": (_el: _Element): void => { reserved9 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "genericAddress": (_el: _Element): void => { genericAddress = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "genericDigits": (_el: _Element): void => { genericDigits = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "genericName": (_el: _Element): void => { genericName = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "port": (_el: _Element): void => { port = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "context": (_el: _Element): void => { context = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyId,
        _extension_additions_list_spec_for_PartyId,
        _root_component_type_list_2_spec_for_PartyId,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyId(
        reserved0,
        reserved1,
        reserved2,
        reserved3,
        reserved4,
        reserved5,
        dn,
        userProvided,
        reserved6,
        reserved7,
        ipAddress,
        reserved8,
        trunkId,
        reserved9,
        genericAddress,
        genericDigits,
        genericName,
        port,
        context,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PartyId(el);
}

let _cached_encoder_for_PartyId: $.ASN1Encoder<PartyId> | null = null;

/**
 * @summary Encodes a(n) PartyId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyId, encoded as an ASN.1 Element.
 */
export
function _encode_PartyId (value: PartyId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyId) { _cached_encoder_for_PartyId = function (value: PartyId, elGetter: $.ASN1Encoder<PartyId>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(19 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.reserved0 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.reserved0, $.BER);
    }
    if (value.reserved1 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.reserved1, $.BER);
    }
    if (value.reserved2 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.reserved2, $.BER);
    }
    if (value.reserved3 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.reserved3, $.BER);
    }
    if (value.reserved4 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.reserved4, $.BER);
    }
    if (value.reserved5 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.reserved5, $.BER);
    }
    if (value.dn !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeVisibleString, $.BER)(value.dn, $.BER);
    }
    if (value.userProvided !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeVisibleString, $.BER)(value.userProvided, $.BER);
    }
    if (value.reserved6 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.reserved6, $.BER);
    }
    if (value.reserved7 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.reserved7, $.BER);
    }
    if (value.ipAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeVisibleString, $.BER)(value.ipAddress, $.BER);
    }
    if (value.reserved8 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.reserved8, $.BER);
    }
    if (value.trunkId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeVisibleString, $.BER)(value.trunkId, $.BER);
    }
    if (value.reserved9 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.reserved9, $.BER);
    }
    if (value.genericAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeVisibleString, $.BER)(value.genericAddress, $.BER);
    }
    if (value.genericDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeVisibleString, $.BER)(value.genericDigits, $.BER);
    }
    if (value.genericName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeVisibleString, $.BER)(value.genericName, $.BER);
    }
    if (value.port !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeVisibleString, $.BER)(value.port, $.BER);
    }
    if (value.context !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeVisibleString, $.BER)(value.context, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyId(value, elGetter);
}


/* eslint-enable */
