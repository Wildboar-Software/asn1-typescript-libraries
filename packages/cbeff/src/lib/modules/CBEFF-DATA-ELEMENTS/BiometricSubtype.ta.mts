/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BiometricSubtype
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricSubtype  ::=  INTEGER {
 *     noValueAvailable                (0),
 *     left                            (1),
 *     right                           (2),
 *     thumb                           (4),
 *     leftThumb                       (5),
 *     rightThumb                      (6),
 *     index                           (8),
 *     leftIndex                       (9),
 *     rightIndex                      (10),
 *     middle                          (16),
 *     leftMiddle                      (17),
 *     rightMiddle                     (18),
 *     ring                            (32),
 *     leftRing                        (33),
 *     rightRing                       (34),
 *     little                          (64),
 *     leftLittle                      (65),
 *     rightLittle                     (66),
 *     palm                            (132),
 *     leftPalm                        (133),
 *     rightPalm                       (134),
 *     backOfHand                      (136),
 *     leftBackOfHand                  (137),
 *     rightBackOfHand                 (138),
 *     wrist                           (144),
 *     leftWrist                       (145),
 *     rightWrist                      (146),
 * 
 *     -- The following values are valid combinations
 *     -- of biometric subtypes within a single byte field. The
 *     -- values are the bitwise OR of other biometric subtype values.
 *     leftAndRight                    (3),
 *     bothThumbs                      (7),
 *     bothIndex                       (11),
 *     thumbIndex                      (12),
 *     leftThumbIndex                  (13),
 *     rightThumbIndex                 (14),
 *     bothThumbIndex                  (15),
 *     bothMiddle                      (19),
 *     thumbMiddle                     (20),
 *     leftThumbMiddle                 (21),
 *     rightThumbMiddle                (22),
 *     bothThumbMiddle                 (23),
 *     indexMiddle                     (24),
 *     leftIndexMiddle                 (25),
 *     rightIndexMiddle                (26),
 *     bothIndexMiddle                 (27),
 *     thumbIndexMiddle                (28),
 *     leftThumbIndexMiddle            (29),
 *     rightThumbIndexMiddle           (30),
 *     bothThumbIndexMiddle            (31),
 *     bothRing                        (35),
 *     thumbRing                       (36),
 *     leftThumbRing                   (37),
 *     rightThumbRing                  (38),
 *     bothThumbRing                   (39),
 *     ringIndex                       (40),
 *     leftRingIndex                   (41),
 *     rightRingIndex                  (42),
 *     bothRingIndex                   (43),
 *     thumbIndexRing                  (44),
 *     leftThumbIndexRing              (45),
 *     rightThumbIndexRing             (46),
 *     bothThumbIndexRing              (47),
 *     middleRing                      (48),
 *     leftMiddleRing                  (49),
 *     rightMiddleRing                 (50),
 *     bothMiddleRing                  (51),
 *     thumbMiddleRing                 (52),
 *     leftThumbMiddleRing             (53),
 *     rightThumbMiddleRing            (54),
 *     bothThumbMiddleRing             (55),
 *     indexMiddleRing                 (56),
 *     leftIndexMiddleRing             (57),
 *     rightIndexMiddleRing            (58),
 *     bothIndexMiddleRing             (59),
 *     thumbIndexMiddleRing            (60),
 *     leftThumbIndexMiddleRing        (61),
 *     rightThumbIndexMiddleRing       (62),
 *     bothThumbIndexMiddleRing        (63),
 *     bothLittle                      (67),
 *     thumbLittle                     (68),
 *     leftThumbLittle                 (69),
 *     rightThumbLittle                (70),
 *     bothThumbLittle                 (71),
 *     indexLittle                     (72),
 *     leftIndexLittle                 (73),
 *     rightIndexLittle                (74),
 *     bothIndexLittle                 (75),
 *     thumbIndexLittle                (76),
 *     leftThumbIndexLittle            (77),
 *     rightThumbIndexLittle           (78),
 *     bothThumbIndexLittle            (79),
 *     middleLittle                    (80),
 *     leftMiddleLittle                (81),
 *     rightMiddleLittle               (82),
 *     bothMiddleLittle                (83),
 *     thumbMiddleLittle               (84),
 *     leftThumbMiddleLittle           (85),
 *     rightThumbMiddleLittle          (86),
 *     bothThumbMiddleLittle           (87),
 *     indexMiddleLittle               (88),
 *     leftIndexMiddleLittle           (89),
 *     rightIndexMiddleLittle          (90),
 *     bothIndexMiddleLittle           (91),
 *     thumbIndexMiddleLittle          (92),
 *     leftThumbIndexMiddleLittle      (93),
 *     rightThumbIndexMiddleLittle     (94),
 *     bothThumbIndexMiddleLittle      (95),
 *     ringLittle                      (96),
 *     leftRingLittle                  (97),
 *     rightRingLittle                 (98),
 *     bothRingLittle                  (99),
 *     thumbRingLittle                 (100),
 *     leftThumbRingLittle             (101),
 *     rightThumbRingLittle            (102),
 *     bothThumbRingLittle             (103),
 *     indexRingLittle                 (104),
 *     leftIndexRingLittle             (105),
 *     rightIndexRingLittle            (106),
 *     bothIndexRingLittle             (107),
 *     thumbIndexRingLittle            (108),
 *     leftThumbIndexRingLittle        (109),
 *     rightThumbIndexRingLittle       (110),
 *     bothThumbIndexRingLittle        (111),
 *     middleRingLittle                (112),
 *     leftMiddleRingLittle            (113),
 *     rightMiddleRingLittle           (114),
 *     bothMiddleRingLittle            (115),
 *     thumbMiddleRingLittle           (116),
 *     leftThumbMiddleRingLittle       (117),
 *     rightThumbMiddleRingLittle      (118),
 *     bothThumbMiddleRingLittle       (119),
 *     indexMiddleRingLittle           (120),  -- four finger slap
 *     leftIndexMiddleRingLittle       (121),
 *     rightIndexMiddleRingLittle      (122),
 *     bothIndexMiddleRingLittle       (123),
 *     allFingers                      (124),
 *     leftAllFingers                  (125),
 *     rightAllFingers                 (126),
 *     bothAllFingers                  (127),  -- tenprint
 *     bothPalms                       (135),
 *     bothBackOfHand                  (139),
 *     palmBackOfHand                  (140),
 *     leftPalmBackOfHand              (141),
 *     rightPalmBackOfHand             (142),
 *     bothPalmBackOfHand              (143),
 *     bothWrist                       (147),
 *     palmWrist                       (148),
 *     leftPalmWrist                   (149),
 *     rightPalmWrist                  (150),
 *     bothPalmWrist                   (151),
 *     backOfHandWrist                 (152),
 *     leftBackOfHandWrist             (153),
 *     rightBackOfHandWrist            (154),
 *     bothBackOfHandWrist             (155),
 *     palmBackOfHandWrist             (156),
 *     leftPalmBackOfHandWrist         (157),
 *     rightPalmBackOfHandWrist        (158),
 *     bothPalmBackOfHandWrist         (159)
 * } (0 .. 255)
 * ```
 */
export
type BiometricSubtype = INTEGER;

/**
 * @summary BiometricSubtype_noValueAvailable
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_noValueAvailable: number = 0 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_noValueAvailable
 * @constant
 * @type {number}
 */
export
const noValueAvailable: number = BiometricSubtype_noValueAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_left
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_left: number = 1 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_left
 * @constant
 * @type {number}
 */
export
const left: number = BiometricSubtype_left; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_right
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_right: number = 2 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_right
 * @constant
 * @type {number}
 */
export
const right: number = BiometricSubtype_right; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumb
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumb: number = 4 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumb
 * @constant
 * @type {number}
 */
export
const thumb: number = BiometricSubtype_thumb; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumb
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumb: number = 5 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumb
 * @constant
 * @type {number}
 */
export
const leftThumb: number = BiometricSubtype_leftThumb; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumb
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumb: number = 6 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumb
 * @constant
 * @type {number}
 */
export
const rightThumb: number = BiometricSubtype_rightThumb; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_index
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_index: number = 8 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_index
 * @constant
 * @type {number}
 */
export
const index: number = BiometricSubtype_index; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndex: number = 9 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndex
 * @constant
 * @type {number}
 */
export
const leftIndex: number = BiometricSubtype_leftIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndex: number = 10 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndex
 * @constant
 * @type {number}
 */
export
const rightIndex: number = BiometricSubtype_rightIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_middle: number = 16 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middle
 * @constant
 * @type {number}
 */
export
const middle: number = BiometricSubtype_middle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftMiddle: number = 17 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddle
 * @constant
 * @type {number}
 */
export
const leftMiddle: number = BiometricSubtype_leftMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightMiddle: number = 18 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddle
 * @constant
 * @type {number}
 */
export
const rightMiddle: number = BiometricSubtype_rightMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_ring
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_ring: number = 32 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_ring
 * @constant
 * @type {number}
 */
export
const ring: number = BiometricSubtype_ring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftRing: number = 33 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftRing
 * @constant
 * @type {number}
 */
export
const leftRing: number = BiometricSubtype_leftRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightRing: number = 34 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightRing
 * @constant
 * @type {number}
 */
export
const rightRing: number = BiometricSubtype_rightRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_little
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_little: number = 64 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_little
 * @constant
 * @type {number}
 */
export
const little: number = BiometricSubtype_little; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftLittle: number = 65 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftLittle
 * @constant
 * @type {number}
 */
export
const leftLittle: number = BiometricSubtype_leftLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightLittle: number = 66 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightLittle
 * @constant
 * @type {number}
 */
export
const rightLittle: number = BiometricSubtype_rightLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palm
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_palm: number = 132 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palm
 * @constant
 * @type {number}
 */
export
const palm: number = BiometricSubtype_palm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalm
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftPalm: number = 133 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalm
 * @constant
 * @type {number}
 */
export
const leftPalm: number = BiometricSubtype_leftPalm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalm
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightPalm: number = 134 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalm
 * @constant
 * @type {number}
 */
export
const rightPalm: number = BiometricSubtype_rightPalm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_backOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_backOfHand: number = 136 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_backOfHand
 * @constant
 * @type {number}
 */
export
const backOfHand: number = BiometricSubtype_backOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftBackOfHand: number = 137 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftBackOfHand
 * @constant
 * @type {number}
 */
export
const leftBackOfHand: number = BiometricSubtype_leftBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightBackOfHand: number = 138 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightBackOfHand
 * @constant
 * @type {number}
 */
export
const rightBackOfHand: number = BiometricSubtype_rightBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_wrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_wrist: number = 144 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_wrist
 * @constant
 * @type {number}
 */
export
const wrist: number = BiometricSubtype_wrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftWrist: number = 145 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftWrist
 * @constant
 * @type {number}
 */
export
const leftWrist: number = BiometricSubtype_leftWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightWrist: number = 146 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightWrist
 * @constant
 * @type {number}
 */
export
const rightWrist: number = BiometricSubtype_rightWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftAndRight
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftAndRight: number = 3 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftAndRight
 * @constant
 * @type {number}
 */
export
const leftAndRight: number = BiometricSubtype_leftAndRight; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbs
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbs: number = 7 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbs
 * @constant
 * @type {number}
 */
export
const bothThumbs: number = BiometricSubtype_bothThumbs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndex: number = 11 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndex
 * @constant
 * @type {number}
 */
export
const bothIndex: number = BiometricSubtype_bothIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndex: number = 12 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndex
 * @constant
 * @type {number}
 */
export
const thumbIndex: number = BiometricSubtype_thumbIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndex: number = 13 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndex
 * @constant
 * @type {number}
 */
export
const leftThumbIndex: number = BiometricSubtype_leftThumbIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndex: number = 14 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndex
 * @constant
 * @type {number}
 */
export
const rightThumbIndex: number = BiometricSubtype_rightThumbIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndex: number = 15 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndex
 * @constant
 * @type {number}
 */
export
const bothThumbIndex: number = BiometricSubtype_bothThumbIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothMiddle: number = 19 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddle
 * @constant
 * @type {number}
 */
export
const bothMiddle: number = BiometricSubtype_bothMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbMiddle: number = 20 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddle
 * @constant
 * @type {number}
 */
export
const thumbMiddle: number = BiometricSubtype_thumbMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbMiddle: number = 21 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddle
 * @constant
 * @type {number}
 */
export
const leftThumbMiddle: number = BiometricSubtype_leftThumbMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbMiddle: number = 22 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddle
 * @constant
 * @type {number}
 */
export
const rightThumbMiddle: number = BiometricSubtype_rightThumbMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbMiddle: number = 23 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddle
 * @constant
 * @type {number}
 */
export
const bothThumbMiddle: number = BiometricSubtype_bothThumbMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_indexMiddle: number = 24 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddle
 * @constant
 * @type {number}
 */
export
const indexMiddle: number = BiometricSubtype_indexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndexMiddle: number = 25 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddle
 * @constant
 * @type {number}
 */
export
const leftIndexMiddle: number = BiometricSubtype_leftIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndexMiddle: number = 26 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddle
 * @constant
 * @type {number}
 */
export
const rightIndexMiddle: number = BiometricSubtype_rightIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndexMiddle: number = 27 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddle
 * @constant
 * @type {number}
 */
export
const bothIndexMiddle: number = BiometricSubtype_bothIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndexMiddle: number = 28 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const thumbIndexMiddle: number = BiometricSubtype_thumbIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndexMiddle: number = 29 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const leftThumbIndexMiddle: number = BiometricSubtype_leftThumbIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndexMiddle: number = 30 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const rightThumbIndexMiddle: number = BiometricSubtype_rightThumbIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndexMiddle: number = 31 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexMiddle
 * @constant
 * @type {number}
 */
export
const bothThumbIndexMiddle: number = BiometricSubtype_bothThumbIndexMiddle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothRing: number = 35 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothRing
 * @constant
 * @type {number}
 */
export
const bothRing: number = BiometricSubtype_bothRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbRing: number = 36 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbRing
 * @constant
 * @type {number}
 */
export
const thumbRing: number = BiometricSubtype_thumbRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbRing: number = 37 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbRing
 * @constant
 * @type {number}
 */
export
const leftThumbRing: number = BiometricSubtype_leftThumbRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbRing: number = 38 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbRing
 * @constant
 * @type {number}
 */
export
const rightThumbRing: number = BiometricSubtype_rightThumbRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbRing: number = 39 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbRing
 * @constant
 * @type {number}
 */
export
const bothThumbRing: number = BiometricSubtype_bothThumbRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_ringIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_ringIndex: number = 40 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_ringIndex
 * @constant
 * @type {number}
 */
export
const ringIndex: number = BiometricSubtype_ringIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftRingIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftRingIndex: number = 41 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftRingIndex
 * @constant
 * @type {number}
 */
export
const leftRingIndex: number = BiometricSubtype_leftRingIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightRingIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightRingIndex: number = 42 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightRingIndex
 * @constant
 * @type {number}
 */
export
const rightRingIndex: number = BiometricSubtype_rightRingIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothRingIndex
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothRingIndex: number = 43 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothRingIndex
 * @constant
 * @type {number}
 */
export
const bothRingIndex: number = BiometricSubtype_bothRingIndex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndexRing: number = 44 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexRing
 * @constant
 * @type {number}
 */
export
const thumbIndexRing: number = BiometricSubtype_thumbIndexRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndexRing: number = 45 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexRing
 * @constant
 * @type {number}
 */
export
const leftThumbIndexRing: number = BiometricSubtype_leftThumbIndexRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndexRing: number = 46 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexRing
 * @constant
 * @type {number}
 */
export
const rightThumbIndexRing: number = BiometricSubtype_rightThumbIndexRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndexRing: number = 47 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexRing
 * @constant
 * @type {number}
 */
export
const bothThumbIndexRing: number = BiometricSubtype_bothThumbIndexRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_middleRing: number = 48 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middleRing
 * @constant
 * @type {number}
 */
export
const middleRing: number = BiometricSubtype_middleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftMiddleRing: number = 49 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddleRing
 * @constant
 * @type {number}
 */
export
const leftMiddleRing: number = BiometricSubtype_leftMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightMiddleRing: number = 50 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddleRing
 * @constant
 * @type {number}
 */
export
const rightMiddleRing: number = BiometricSubtype_rightMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothMiddleRing: number = 51 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddleRing
 * @constant
 * @type {number}
 */
export
const bothMiddleRing: number = BiometricSubtype_bothMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbMiddleRing: number = 52 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddleRing
 * @constant
 * @type {number}
 */
export
const thumbMiddleRing: number = BiometricSubtype_thumbMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbMiddleRing: number = 53 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddleRing
 * @constant
 * @type {number}
 */
export
const leftThumbMiddleRing: number = BiometricSubtype_leftThumbMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbMiddleRing: number = 54 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddleRing
 * @constant
 * @type {number}
 */
export
const rightThumbMiddleRing: number = BiometricSubtype_rightThumbMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbMiddleRing: number = 55 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddleRing
 * @constant
 * @type {number}
 */
export
const bothThumbMiddleRing: number = BiometricSubtype_bothThumbMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_indexMiddleRing: number = 56 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddleRing
 * @constant
 * @type {number}
 */
export
const indexMiddleRing: number = BiometricSubtype_indexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndexMiddleRing: number = 57 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const leftIndexMiddleRing: number = BiometricSubtype_leftIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndexMiddleRing: number = 58 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const rightIndexMiddleRing: number = BiometricSubtype_rightIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndexMiddleRing: number = 59 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const bothIndexMiddleRing: number = BiometricSubtype_bothIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndexMiddleRing: number = 60 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const thumbIndexMiddleRing: number = BiometricSubtype_thumbIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndexMiddleRing: number = 61 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const leftThumbIndexMiddleRing: number = BiometricSubtype_leftThumbIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndexMiddleRing: number = 62 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const rightThumbIndexMiddleRing: number = BiometricSubtype_rightThumbIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndexMiddleRing: number = 63 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexMiddleRing
 * @constant
 * @type {number}
 */
export
const bothThumbIndexMiddleRing: number = BiometricSubtype_bothThumbIndexMiddleRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothLittle: number = 67 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothLittle
 * @constant
 * @type {number}
 */
export
const bothLittle: number = BiometricSubtype_bothLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbLittle: number = 68 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbLittle
 * @constant
 * @type {number}
 */
export
const thumbLittle: number = BiometricSubtype_thumbLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbLittle: number = 69 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbLittle
 * @constant
 * @type {number}
 */
export
const leftThumbLittle: number = BiometricSubtype_leftThumbLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbLittle: number = 70 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbLittle
 * @constant
 * @type {number}
 */
export
const rightThumbLittle: number = BiometricSubtype_rightThumbLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbLittle: number = 71 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbLittle
 * @constant
 * @type {number}
 */
export
const bothThumbLittle: number = BiometricSubtype_bothThumbLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_indexLittle: number = 72 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexLittle
 * @constant
 * @type {number}
 */
export
const indexLittle: number = BiometricSubtype_indexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndexLittle: number = 73 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexLittle
 * @constant
 * @type {number}
 */
export
const leftIndexLittle: number = BiometricSubtype_leftIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndexLittle: number = 74 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexLittle
 * @constant
 * @type {number}
 */
export
const rightIndexLittle: number = BiometricSubtype_rightIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndexLittle: number = 75 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexLittle
 * @constant
 * @type {number}
 */
export
const bothIndexLittle: number = BiometricSubtype_bothIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndexLittle: number = 76 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexLittle
 * @constant
 * @type {number}
 */
export
const thumbIndexLittle: number = BiometricSubtype_thumbIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndexLittle: number = 77 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexLittle
 * @constant
 * @type {number}
 */
export
const leftThumbIndexLittle: number = BiometricSubtype_leftThumbIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndexLittle: number = 78 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexLittle
 * @constant
 * @type {number}
 */
export
const rightThumbIndexLittle: number = BiometricSubtype_rightThumbIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndexLittle: number = 79 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexLittle
 * @constant
 * @type {number}
 */
export
const bothThumbIndexLittle: number = BiometricSubtype_bothThumbIndexLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_middleLittle: number = 80 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middleLittle
 * @constant
 * @type {number}
 */
export
const middleLittle: number = BiometricSubtype_middleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftMiddleLittle: number = 81 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddleLittle
 * @constant
 * @type {number}
 */
export
const leftMiddleLittle: number = BiometricSubtype_leftMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightMiddleLittle: number = 82 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddleLittle
 * @constant
 * @type {number}
 */
export
const rightMiddleLittle: number = BiometricSubtype_rightMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothMiddleLittle: number = 83 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddleLittle
 * @constant
 * @type {number}
 */
export
const bothMiddleLittle: number = BiometricSubtype_bothMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbMiddleLittle: number = 84 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const thumbMiddleLittle: number = BiometricSubtype_thumbMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbMiddleLittle: number = 85 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const leftThumbMiddleLittle: number = BiometricSubtype_leftThumbMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbMiddleLittle: number = 86 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const rightThumbMiddleLittle: number = BiometricSubtype_rightThumbMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbMiddleLittle: number = 87 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddleLittle
 * @constant
 * @type {number}
 */
export
const bothThumbMiddleLittle: number = BiometricSubtype_bothThumbMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_indexMiddleLittle: number = 88 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddleLittle
 * @constant
 * @type {number}
 */
export
const indexMiddleLittle: number = BiometricSubtype_indexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndexMiddleLittle: number = 89 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const leftIndexMiddleLittle: number = BiometricSubtype_leftIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndexMiddleLittle: number = 90 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const rightIndexMiddleLittle: number = BiometricSubtype_rightIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndexMiddleLittle: number = 91 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const bothIndexMiddleLittle: number = BiometricSubtype_bothIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndexMiddleLittle: number = 92 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const thumbIndexMiddleLittle: number = BiometricSubtype_thumbIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndexMiddleLittle: number = 93 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const leftThumbIndexMiddleLittle: number = BiometricSubtype_leftThumbIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndexMiddleLittle: number = 94 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const rightThumbIndexMiddleLittle: number = BiometricSubtype_rightThumbIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndexMiddleLittle: number = 95 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexMiddleLittle
 * @constant
 * @type {number}
 */
export
const bothThumbIndexMiddleLittle: number = BiometricSubtype_bothThumbIndexMiddleLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_ringLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_ringLittle: number = 96 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_ringLittle
 * @constant
 * @type {number}
 */
export
const ringLittle: number = BiometricSubtype_ringLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftRingLittle: number = 97 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftRingLittle
 * @constant
 * @type {number}
 */
export
const leftRingLittle: number = BiometricSubtype_leftRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightRingLittle: number = 98 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightRingLittle
 * @constant
 * @type {number}
 */
export
const rightRingLittle: number = BiometricSubtype_rightRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothRingLittle: number = 99 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothRingLittle
 * @constant
 * @type {number}
 */
export
const bothRingLittle: number = BiometricSubtype_bothRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbRingLittle: number = 100 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbRingLittle
 * @constant
 * @type {number}
 */
export
const thumbRingLittle: number = BiometricSubtype_thumbRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbRingLittle: number = 101 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbRingLittle
 * @constant
 * @type {number}
 */
export
const leftThumbRingLittle: number = BiometricSubtype_leftThumbRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbRingLittle: number = 102 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbRingLittle
 * @constant
 * @type {number}
 */
export
const rightThumbRingLittle: number = BiometricSubtype_rightThumbRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbRingLittle: number = 103 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbRingLittle
 * @constant
 * @type {number}
 */
export
const bothThumbRingLittle: number = BiometricSubtype_bothThumbRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_indexRingLittle: number = 104 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexRingLittle
 * @constant
 * @type {number}
 */
export
const indexRingLittle: number = BiometricSubtype_indexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndexRingLittle: number = 105 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexRingLittle
 * @constant
 * @type {number}
 */
export
const leftIndexRingLittle: number = BiometricSubtype_leftIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndexRingLittle: number = 106 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexRingLittle
 * @constant
 * @type {number}
 */
export
const rightIndexRingLittle: number = BiometricSubtype_rightIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndexRingLittle: number = 107 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexRingLittle
 * @constant
 * @type {number}
 */
export
const bothIndexRingLittle: number = BiometricSubtype_bothIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbIndexRingLittle: number = 108 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const thumbIndexRingLittle: number = BiometricSubtype_thumbIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbIndexRingLittle: number = 109 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const leftThumbIndexRingLittle: number = BiometricSubtype_leftThumbIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbIndexRingLittle: number = 110 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const rightThumbIndexRingLittle: number = BiometricSubtype_rightThumbIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbIndexRingLittle: number = 111 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbIndexRingLittle
 * @constant
 * @type {number}
 */
export
const bothThumbIndexRingLittle: number = BiometricSubtype_bothThumbIndexRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_middleRingLittle: number = 112 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_middleRingLittle
 * @constant
 * @type {number}
 */
export
const middleRingLittle: number = BiometricSubtype_middleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftMiddleRingLittle: number = 113 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const leftMiddleRingLittle: number = BiometricSubtype_leftMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightMiddleRingLittle: number = 114 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const rightMiddleRingLittle: number = BiometricSubtype_rightMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothMiddleRingLittle: number = 115 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const bothMiddleRingLittle: number = BiometricSubtype_bothMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_thumbMiddleRingLittle: number = 116 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_thumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const thumbMiddleRingLittle: number = BiometricSubtype_thumbMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftThumbMiddleRingLittle: number = 117 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftThumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const leftThumbMiddleRingLittle: number = BiometricSubtype_leftThumbMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightThumbMiddleRingLittle: number = 118 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightThumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const rightThumbMiddleRingLittle: number = BiometricSubtype_rightThumbMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothThumbMiddleRingLittle: number = 119 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothThumbMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const bothThumbMiddleRingLittle: number = BiometricSubtype_bothThumbMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_indexMiddleRingLittle: number = 120 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_indexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const indexMiddleRingLittle: number = BiometricSubtype_indexMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftIndexMiddleRingLittle: number = 121 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftIndexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const leftIndexMiddleRingLittle: number = BiometricSubtype_leftIndexMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightIndexMiddleRingLittle: number = 122 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightIndexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const rightIndexMiddleRingLittle: number = BiometricSubtype_rightIndexMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothIndexMiddleRingLittle: number = 123 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothIndexMiddleRingLittle
 * @constant
 * @type {number}
 */
export
const bothIndexMiddleRingLittle: number = BiometricSubtype_bothIndexMiddleRingLittle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_allFingers
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_allFingers: number = 124 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_allFingers
 * @constant
 * @type {number}
 */
export
const allFingers: number = BiometricSubtype_allFingers; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftAllFingers
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftAllFingers: number = 125 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftAllFingers
 * @constant
 * @type {number}
 */
export
const leftAllFingers: number = BiometricSubtype_leftAllFingers; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightAllFingers
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightAllFingers: number = 126 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightAllFingers
 * @constant
 * @type {number}
 */
export
const rightAllFingers: number = BiometricSubtype_rightAllFingers; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothAllFingers
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothAllFingers: number = 127 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothAllFingers
 * @constant
 * @type {number}
 */
export
const bothAllFingers: number = BiometricSubtype_bothAllFingers; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalms
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothPalms: number = 135 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalms
 * @constant
 * @type {number}
 */
export
const bothPalms: number = BiometricSubtype_bothPalms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothBackOfHand: number = 139 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothBackOfHand
 * @constant
 * @type {number}
 */
export
const bothBackOfHand: number = BiometricSubtype_bothBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palmBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_palmBackOfHand: number = 140 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palmBackOfHand
 * @constant
 * @type {number}
 */
export
const palmBackOfHand: number = BiometricSubtype_palmBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalmBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftPalmBackOfHand: number = 141 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalmBackOfHand
 * @constant
 * @type {number}
 */
export
const leftPalmBackOfHand: number = BiometricSubtype_leftPalmBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalmBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightPalmBackOfHand: number = 142 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalmBackOfHand
 * @constant
 * @type {number}
 */
export
const rightPalmBackOfHand: number = BiometricSubtype_rightPalmBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalmBackOfHand
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothPalmBackOfHand: number = 143 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalmBackOfHand
 * @constant
 * @type {number}
 */
export
const bothPalmBackOfHand: number = BiometricSubtype_bothPalmBackOfHand; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothWrist: number = 147 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothWrist
 * @constant
 * @type {number}
 */
export
const bothWrist: number = BiometricSubtype_bothWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palmWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_palmWrist: number = 148 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palmWrist
 * @constant
 * @type {number}
 */
export
const palmWrist: number = BiometricSubtype_palmWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalmWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftPalmWrist: number = 149 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalmWrist
 * @constant
 * @type {number}
 */
export
const leftPalmWrist: number = BiometricSubtype_leftPalmWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalmWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightPalmWrist: number = 150 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalmWrist
 * @constant
 * @type {number}
 */
export
const rightPalmWrist: number = BiometricSubtype_rightPalmWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalmWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothPalmWrist: number = 151 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalmWrist
 * @constant
 * @type {number}
 */
export
const bothPalmWrist: number = BiometricSubtype_bothPalmWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_backOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_backOfHandWrist: number = 152 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_backOfHandWrist
 * @constant
 * @type {number}
 */
export
const backOfHandWrist: number = BiometricSubtype_backOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftBackOfHandWrist: number = 153 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const leftBackOfHandWrist: number = BiometricSubtype_leftBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightBackOfHandWrist: number = 154 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const rightBackOfHandWrist: number = BiometricSubtype_rightBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothBackOfHandWrist: number = 155 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const bothBackOfHandWrist: number = BiometricSubtype_bothBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_palmBackOfHandWrist: number = 156 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_palmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const palmBackOfHandWrist: number = BiometricSubtype_palmBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_leftPalmBackOfHandWrist: number = 157 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_leftPalmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const leftPalmBackOfHandWrist: number = BiometricSubtype_leftPalmBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_rightPalmBackOfHandWrist: number = 158 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_rightPalmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const rightPalmBackOfHandWrist: number = BiometricSubtype_rightPalmBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const BiometricSubtype_bothPalmBackOfHandWrist: number = 159 satisfies BiometricSubtype; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricSubtype_bothPalmBackOfHandWrist
 * @constant
 * @type {number}
 */
export
const bothPalmBackOfHandWrist: number = BiometricSubtype_bothPalmBackOfHandWrist; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_BiometricSubtype: $.ASN1Decoder<BiometricSubtype> = $._decodeInteger;

export
const _encode_BiometricSubtype: $.ASN1Encoder<BiometricSubtype> = $._encodeInteger;

/* eslint-enable */
